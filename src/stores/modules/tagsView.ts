import { defineStore } from 'pinia';
import { ref } from 'vue';
import { RouteLocationNormalized } from 'vue-router';

export type TagView = Partial<RouteLocationNormalized>

export const useTagsViewStore = defineStore('tagsView', () => {
  const visitedViews = ref<TagView[]>([]);

  /** 添加 visitedViews */
  const addVisitedView = (view: TagView) => {
    // 检查是否已经存在相同的 visitedView
    const index = visitedViews.value.findIndex((v) => v.path === view.path);
    if (index !== -1) {
      // 防止 query 参数丢失
      visitedViews.value[index].fullPath !== view.fullPath && (visitedViews.value[index] = { ...view });
    } else {
      // 添加新的 visitedView
      visitedViews.value.push({ ...view });
    }
  };

  /** 删除 visitedViews */
  const delVisitedView = (view: TagView) => {
    const index = visitedViews.value.findIndex((v) => v.path === view.path);
    if (index !== -1) visitedViews.value.splice(index, 1);
  };

  /** 删除其他 visitedViews */
  const delOthersVisitedViews = (view: TagView) => {
    visitedViews.value = visitedViews.value.filter((v) => {
      return v.meta?.affix || v.path === view.path;
    });
  };

  /** 全部删除 visitedViews */
  const delAllVisitedViews = () => {
    // 只保留固定的 tags
    visitedViews.value = visitedViews.value.filter((tag) => tag.meta?.affix);
  };

  return {
    visitedViews,
    addVisitedView,
    delVisitedView,
    delOthersVisitedViews,
    delAllVisitedViews
  };
});