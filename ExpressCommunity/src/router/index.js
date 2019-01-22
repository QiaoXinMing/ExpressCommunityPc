import Vue from 'vue'
import Router from 'vue-router'
import index from "@/components/container/index"

import arctiles from "@/components/container/arctiles"
import pictures from "@/components/container/pictures"
import videos from "@/components/container/videos"
import login from "@/components/container/login"

import publicIndex from "@/components/container/publicIndex"
import ArctileDetails from "@/components/container/arctileDetails"
import PictureDetails from "@/components/container/pictureDetails"
import VideoDetails from "@/components/container/videoDetails"


import personal from "@/components/personal/personal"
import mySet from "@/components/personal/mySet"
import myCollection from "@/components/personal/myCollection"
import myArctile from "@/components/personal/myArctile"
import myQuestion from "@/components/personal/myQuestion"
import myAnswer from "@/components/personal/myAnswer"
import myPictureCollection from "@/components/personal/myPictureCollection"
import myDrafts from "@/components/personal/myDrafts"
import myMessage from "@/components/personal/myMessage"
import myVideo from "@/components/personal/myVideo"

import publish from "@/components/container/publish"
import search from "@/components/container/search"
import NotFound from "@/components/container/NotFound"

import webInfo from '@/components/footer/webInfo'
import websuggest from '@/components/footer/websuggest'
import webHelp from '@/components/footer/webHelp'
import webCopyRight from '@/components/footer/copyright'
Vue.use(Router)

export default new Router({
    linkActiveClass: 'active',
    routes: [{
            path: '/',
            components: {
                container: index
            }
        }, {
            name: "index",
            path: '/index',
            components: {
                container: index
            },
        },
        {
            name: "arctile",
            path: '/arctiles',
            components: {
                container: arctiles
            },
        }, {
            name: "pictures",
            path: '/pictures',
            components: {
                container: pictures
            },
        }, {
            name: "video",
            path: '/videos',
            components: {
                container: videos
            },
        }, {
            name: "ArctileDetails",
            path: '/ArctileDetails',
            components: {
                container: ArctileDetails
            },
        }, {
            name: "PictureDetails",
            path: '/PictureDetails',
            components: {
                container: PictureDetails
            },
        }, {
            name: "VideoDetails",
            path: '/VideoDetails',
            components: {
                container: VideoDetails
            },
        }, {
            name: "login",
            path: '/login',
            components: {
                container: login,
            },
        }, {
            name: "personal",
            path: '/personal',
            meta: {
                requireAuth: true,
            },
            redirect: '/personal/mySet',
            components: {
                container: personal,
            },
            children: [{
                name: "mySet",
                path: "mySet",
                meta: {
                    requireAuth: true,
                },
                components: {
                    person: mySet
                }
            }, {
                name: "myArctile",
                path: "myArctile",
                meta: {
                    requireAuth: true,
                },
                components: {
                    person: myArctile
                }
            }, {
                name: "myPictureCollection",
                path: "myPictureCollection",
                meta: {
                    requireAuth: true,
                },
                components: {
                    person: myPictureCollection
                }
            }, {
                name: "myVideo",
                path: "myVideo",
                meta: {
                    requireAuth: true,
                },
                components: {
                    person: myVideo
                }
            }, {
                name: "myQuestion",
                path: "myQuestion",
                meta: {
                    requireAuth: true,
                },
                components: {
                    person: myQuestion
                }
            }, {
                name: "myAnswer",
                path: "myAnswer",
                meta: {
                    requireAuth: true,
                },
                components: {
                    person: myAnswer
                }
            }, {
                name: "myCollection",
                path: "myCollection",
                meta: {
                    requireAuth: true,
                },
                components: {
                    person: myCollection
                }
            }, {
                name: "myDrafts",
                path: "myDrafts",
                meta: {
                    requireAuth: true,
                },
                components: {
                    person: myDrafts
                }
            }, {
                name: "myMessage",
                path: "myMessage",
                meta: {
                    requireAuth: true,
                },
                components: {
                    person: myMessage
                }
            }, {
                name: "myAttentioned",
                path: "myAttentioned",
                meta: {
                    requireAuth: true,
                },
                components: {
                    person: myMessage
                }
            }, {
                name: "myAttention",
                path: "myAttention",
                meta: {
                    requireAuth: true,
                },
                components: {
                    person: myMessage
                }
            }]
        }, {
            name: "publish",
            path: '/publish',
            meta:{
                requireAuth: true,
            },
            components: {
                container: publish
            },
        }, {
            name: "search",
            path: '/search/:searchInfo',
            components: {
                container: search
            },
        },
        {
            name: "zjs",
            path: '/zjs',
            components: {
                container: publicIndex
            },
        },
        {
            name: "wd",
            path: '/wd',
            components: {
                container: publicIndex
            },
        }, {
            name: "zsjy",
            path: '/zsjy',
            components: {
                container: publicIndex
            },
        }, {
            name: "lzsq",
            path: '/lzsq',
            components: {
                container: publicIndex
            },
        }, {
            name: "xlzxs",
            path: '/xlzxs',
            components: {
                container: publicIndex
            },
        }, {
            name: "jydz",
            path: '/jydz',
            components: {
                container: publicIndex
            },
        }, {
            name: "kxyk",
            path: '/kxyk',
            components: {
                container: publicIndex
            },
        }, {
            name: "fjzh",
            path: '/fjzh',
            components: {
                container: publicIndex
            },
        }, {
            name: "djwh",
            path: '/djwh',
            components: {
                container: publicIndex
            },
        }, {
            name: "jyqm",
            path: '/jyqm',
            components: {
                container: publicIndex
            },
        }, {
            name: "zxzz",
            path: '/zxzz',
            components: {
                container: publicIndex
            },
        },
        {
            name: 'webInfo',
            path: '/webInfo',
            components: {
                container: webInfo
            },
        }, {
            name: 'websuggest',
            path: '/websuggest',
            components: {
                container: websuggest
            },
        }, {
            name: 'webHelp',
            path: '/webHelp',
            components: {
                container: webHelp
            },
        }, {
            name: 'webCopyRight',
            path: '/webCopyRight',
            components: {
                container: webCopyRight
            },
        }, {
            name: 'notFound',
            path: '*',
            components: {
                container: NotFound,
            },
        },
    ]
})