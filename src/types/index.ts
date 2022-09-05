import View from "../core/view";

export interface NewsStore {
    getAllFeeds: () => NewsFeed[];
    getFeed: (position: number) => NewsFeed;
    setFeeds: (feeds: NewsFeed[]) => void;
    makeRead: (id:number) => void;
    hasFeeds: boolean;
    currentPage: number;
    nextPage: number;
    prevPage: number;
}

export interface Store {
    feeds: NewsFeed[];
    currentPage: number;
}

export interface News {
    readonly id: number;
    readonly time_ago: string;
    readonly title: string;
    readonly url: string;
    readonly user: string;
    readonly content: string;
}

export interface NewsFeed extends News {
    readonly points: number;
    readonly comments_count: number;
    read?: boolean;
}

export interface NewsDetail extends News {
    readonly comments: NewsComment[];
}

export interface NewsComment extends News {
    readonly comments: NewsComment[];
    readonly level: number;
}

export interface RouteInfo {
    path: string,
    page: View
}