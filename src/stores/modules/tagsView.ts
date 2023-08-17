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

  return {
    visitedViews,
    addVisitedView,
    delVisitedView
  };
});