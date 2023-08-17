<script lang="ts" setup>
import { onMounted, ref, watch } from 'vue';
import scrollPane from './scrollPane.vue';
import { type RouteLocationNormalized, RouterLink, useRoute, RouteRecordRaw, useRouter } from 'vue-router';
import { useTagsViewStore } from '@/stores/modules/tagsView';
import path from 'path-browserify';
import { routes } from '@/router';


export type TagView = Partial<RouteLocationNormalized>
const route = useRoute();
const tagsViewStore = useTagsViewStore();
const router = useRouter();

/** 标签页组件元素的引用数组 */
const tagRefs = ref<InstanceType<typeof RouterLink>[]>([]);
/** 固定的标签页 */
let affixTags: TagView[] = [];

/** 判断标签页是否激活 */
const isActive = (tag: TagView) => {
  return tag.path === route.path;
};
/** 判断标签页是否固定 */
const isAffix = (tag: TagView) => {
  return tag.meta?.affix;
};
/** 跳转到最后一个标签页 */
const toLastView = (visitedViews: TagView[], view: TagView) => {
  const latestView = visitedViews.slice(-1)[0];
  console.log(latestView, view);

  const fullPath = latestView?.fullPath;
  if (fullPath !== undefined) {
    router.push(fullPath);
  } else {
    // 如果 TagsView 全部被关闭了，则默认重定向到主页
    if (view.name === 'dashboard') {
      // 重新加载主页
      router.push({ path: '/redirect' + view.path, query: view.query });
    } else {
      router.push('/');
    }
  }
};

/** 筛选出固定标签页 */
const filterAffixTags = (routes: RouteRecordRaw[], basePath = '/') => {
  const tags: TagView[] = [];
  routes.forEach((route) => {
    if (isAffix(route)) {
      const tagPath = path.resolve(basePath, route.path);
      tags.push({
        fullPath: tagPath,
        path: tagPath,
        name: route.name,
        meta: { ...route.meta }
      });
    }
    if (route.children) {
      const childTags = filterAffixTags(route.children, route.path);
      tags.push(...childTags);
    }
  });
  return tags;
};
/** 初始化标签 */
const initTags = () => {
  affixTags = filterAffixTags(routes);
  for (const tag of affixTags) {
    // 必须含有 name 属性
    tag.name && tagsViewStore.addVisitedView(tag);
  }
};
/** 添加标签 */
const addTags = () => {
  if (route.name) {
    tagsViewStore.addVisitedView(route);
  }
};
/** 删除标签 */
const closeSelectedTag = (view: TagView) => {
  tagsViewStore.delVisitedView(view);
  isActive(view) && toLastView(tagsViewStore.visitedViews, view);
};


onMounted(() => {
  initTags();
  addTags();
});
watch(
  route,
  () => {
    addTags();
  },
  { deep: true }
);

</script>

<template>
  <div class="tags-view-container">
    <scrollPane class="tags-view-wrapper" :tag-refs="tagRefs">
      <router-link
        ref="tagRefs"
        v-for="tag in tagsViewStore.visitedViews"
        :key="tag.path"
        :class="{ active: isActive(tag) }"
        class="tags-view-item"
        :to="{ path: tag.path, query: tag.query }"
      >
        {{ tag.meta?.title }}
        <el-icon v-if="!isAffix(tag)" :size="12" @click.prevent.stop="closeSelectedTag(tag)">
          <Close />
        </el-icon>
      </router-link>
    </scrollPane>
  </div>
</template>

<style lang="scss" scoped>
.tags-view-container {
  height: var(--v3-tagsview-height);
  width: 100%;
  background-color: var(--v3-header-bg-color);
  box-shadow: 0 0 3px 0 #00000010;
  .tags-view-wrapper {
    .tags-view-item {
      display: inline-block;
      position: relative;
      cursor: pointer;
      height: 26px;
      line-height: 26px;
      border: 1px solid var(--v3-tagsview-tag-border-color);
      border-radius: var(--v3-tagsview-tag-border-radius);
      color: var(--v3-tagsview-tag-text-color);
      background-color: var(--v3-tagsview-tag-bg-color);
      padding: 0 8px;
      font-size: 12px;
      margin-left: 5px;
      margin-top: 4px;
      &:first-of-type {
        margin-left: 5px;
      }
      &:last-of-type {
        margin-right: 5px;
      }
      &.active {
        background-color: var(--v3-tagsview-tag-active-bg-color);
        color: var(--v3-tagsview-tag-active-text-color);
        border-color: var(--v3-tagsview-tag-active-border-color);
        &::before {
          content: "";
          background-color: var(--v3-tagsview-tag-active-before-color);
          display: inline-block;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          position: relative;
          margin-right: 2px;
        }
      }
      .el-icon {
        margin: 0 2px;
        vertical-align: middle;
        border-radius: 50%;
        &:hover {
          background-color: var(--v3-tagsview-tag-icon-hover-bg-color);
          color: var(--v3-tagsview-tag-icon-hover-color);
        }
      }
    }
  }
  .contextmenu {
    margin: 0;
    background-color: #fff;
    z-index: 3000;
    position: absolute;
    list-style-type: none;
    padding: 5px 0;
    border-radius: 4px;
    font-size: 12px;
    font-weight: 400;
    color: #333;
    box-shadow: 2px 2px 3px 0 #00000030;
    li {
      margin: 0;
      padding: 7px 16px;
      cursor: pointer;
      &:hover {
        background-color: #eee;
      }
    }
  }
}
</style>

