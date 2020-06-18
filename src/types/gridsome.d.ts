declare module 'gridsome' {
    import Vue from 'vue';

    export type PageInfo = {
        readonly perPage: number;
        readonly currentPage: number;
        readonly totalPages: number;
        readonly totalItems: number;
        readonly hasPreviousPage: boolean;
        readonly hasNextPage: boolean;
        readonly isFirst: boolean;
        readonly isLast: boolean;
    };

    export interface PagerProps {
        readonly info: PageInfo;
        readonly showLinks: boolean;
        readonly showNavigation: boolean;
        readonly range: number;
        readonly linkClass?: string;
        readonly firstLabel?: string;
        readonly prevLabel?: string;
        readonly nextLabel?: string;
        readonly lastLabel?: string;
    }

    export class Pager extends Vue {
        readonly props: PagerProps;
    }

    // gql
    interface Node {
        readonly id: string;
    }

    export type NodeConnection = {
        readonly totalCount: number;
        readonly pageInfo: PageInfo;
        readonly edges?: ReadonlyArray<NodeConnectionEdge>;
    };

    export type NodeConnectionEdge = {
        readonly node?: Node;
        readonly next?: Node;
        readonly previous?: Node;
    };

    // wp
    export type WordPressCategory = Node & {
        readonly title?: string;
        readonly slug?: string;
        readonly content?: string;
        readonly count?: number;
        readonly path?: string;
        readonly belongsTo?: NodeConnection;
    };

    export type WordPressPost = Node & {
        readonly date?: Date;
        readonly dateGmt?: Date;
        readonly guid?: String;
        readonly modified?: Date;
        readonly modifiedGmt?: Date;
        readonly slug?: Date;
        readonly status?: String;
        readonly type?: String;
        readonly link?: String;
        readonly title?: String;
        readonly content?: String;
        readonly excerpt?: String;
        readonly author?: WordPressAuthor;
        readonly featuredMedia?: WordPressMedia;
        readonly commentStatus?: String;
        readonly pingStatus?: String;
        readonly sticky?: Boolean;
        readonly template?: String;
        readonly format?: String;
        readonly categories?: ReadonlyArray<WordPressCategory>;
        readonly path?: String;
        readonly belongsTo?: NodeConnection;
    }

    export type WordPressAuthor = Node & {
        readonly name?: string;
        readonly url?: string;
        readonly description?: string;
        readonly link?: string;
        readonly slug?: string;
        readonly avatarUrls?: WordPressAvatarUrls;
        readonly title?: string;
        readonly avatars?: WordPressAvatars;
        readonly belongsTo?: NodeConnection;
    };

    export type WordPressAvatarUrls = {
        readonly _24?: string;
        readonly _48?: string;
        readonly _96?: string;
    };

    export type WordPressAvatars = {
        readonly avatar24?: string;
        readonly avatar48?: string;
        readonly avatar96?: string;
    };

    export type WordPressMedia = Node & {
        readonly date?: Date;
        readonly dateGmt?: Date;
        readonly guid?: string;
        readonly modified?: Date;
        readonly modifiedGmt?: Date;
        readonly slug?: string;
        readonly status?: string;
        readonly type?: string;
        readonly link?: string;
        readonly title?: string;
        readonly pingStatus?: string;
        readonly template?: string;
        readonly description?: string;
        readonly caption?: string;
        readonly altText?: string;
        readonly mediaType?: string;
        readonly mimeType?: string;
        readonly mediaDetails?: WordPressMediaDetails;
        readonly post?: number;
        readonly sourceUrl?: string;
        readonly belongsTo?: NodeConnection;
    };

    export type WordPressMediaDetails = {
        readonly width?: number;
        readonly height?: number;
        readonly file?: string;
        readonly sizes?: ImageSizes;
        readonly imageMeta?: ImageMeta;
    };

    export type ImageSizes = {
        readonly thumbnail?: Image;
        readonly medium?: Image;
        readonly large?: Image;
        readonly blogThumbnail?: Image;
        readonly postThumbnail?: Image;
        readonly full?: Image;
    };

    export type Image = {
        readonly file?: string;
        readonly width?: number;
        readonly height?: number;
        readonly mimeType?: string;
        readonly sourceUrl?: string;
    }

    export type ImageMeta = {
        readonly aperture?: string;
        readonly credit?: string;
        readonly camera?: string;
        readonly caption?: string;
        readonly createdTimestamp?: string;
        readonly copyright?: string;
        readonly focalLength?: string;
        readonly iso?: string;
        readonly shutterSpeed?: string;
        readonly title?: string;
        readonly orientation?: string;
    };

    export type WordPressPostTag = Node & {
        readonly belongsTo?: Node;
    };
}
