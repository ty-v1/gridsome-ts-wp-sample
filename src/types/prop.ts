// 定義ファイルを用意
import {NodeConnection, WordPressCategory, WordPressPost} from 'gridsome';

declare module 'vue/types/vue' {

    interface Vue {
        $page: {
            wordPressCategory: WordPressCategory,
            wordPressPost: WordPressPost,
            allWordPressPost: NodeConnection,
        }
    }
}
