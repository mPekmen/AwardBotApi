const { Intents } = require("discord.js");

module.exports = {
    team: require("./award.team.js"),
    client: {
        intents: [
            Intents.FLAGS.GUILDS,
            Intents.FLAGS.GUILD_MESSAGES
        ]
    },
    website: {
        protocol: "https",
        domain: "awardbot.me",
        callback: "/api/auth/callback",
        betaCallback: "/api/auth/callback",
        invite: "/dashboard/callback"
    },
    auth: {
        discord: {
            id: "731219163317534740",
            secret: "WdP_flaqMqH7amuGWlG2XA01_Q1Xc5Dg",
            callback: "https://api.awardbot.me/v1/auth/callback",
            scopes: [ "identify", "guilds" ],
            prompt: "none",
            botInvite: "https://discord.com/oauth2/authorize?client_id=731219163317534740&scope=bot%20applications.commands&response_type=code&permissions=8",
            invite: "https://discord.gg/gBWbgmTRPv"
        },
        youtube: {
            id: "974785502178-5hh6m19m7kblf336gkci7275q82o7348.apps.googleusercontent.com",
            secret: "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",
            callback: "https://api.awardbot.me/v1/connections/youtube/callback",
            scopes: [ "https://www.googleapis.com/auth/youtube.readonly" ],
            apiKey: "AIzaSyAyuavRAzqanvsfe_vFQFDpmCz2p_Vtjp8"
        },
        github: {
            id: "9c496ce9b18907ec214c",
            secret: "6d5107a9e2ecb4e5a78778400b48788657173672",
            callback: "https://api.awardbot.me/v1/connections/github/callback",
            scopes: [ "read:user" ]
        },
        twitter: {
            id: "3vQMkbzYKpticWJ3U2zWAW8yv",
            secret: "ADq9rTTVJzpQ83H5jcaPIcUxi4EUCkQ02eJJ37SCaKoFGxV8HZ",
            callback: "https://api.awardbot.me/v1/connections/twitter/callback",
            scopes: [ "account.follows.read" ],
            apiKey: "AAAAAAAAAAAAAAAAAAAAAPHlVwEAAAAAPEB%2FQmCC7HsX2s40Bx4n8jlKMY4%3DPXCt3YuU6gXWOAg7B9W3R79cfo6dl74i24dFN4A6oXxzreRPhn"
        },
        twitch: {
            id: "ljqmf68bo8u53bsoyl9fcw0rwv124z",
            secret: "5fnqs9hhcrn3hgnyouksqppph4qcgw",
            callback: "https://api.awardbot.me/v1/connections/twitch/callback",
            scopes: [ "user:read:follows", "channel:read:subscriptions" ]
        },
        tiktok: {
            key: "awkm2rm2r2ggmofk",
            secret: "d7b6fad852bbc54ccf4c4a8b385bdb22",
            callback: "https://api.awardbot.me/v1/connections/tiktok/callback",
            scopes: [ "user.info.basic"  ]
        },
        telegram: {
          id: "5212483120",
          secret: "AAGg1wTqykQf4uI9XS8WziPtbs0rA-9Tlg8",
          callback: "https://api.awardbot.me/v1/connections/telegram/callback"
        }
    },
    requireds: {
        youtube: {
            emoji: "<:youtube:957340421607022722>",
            img: "https://cdn.discordapp.com/emojis/917471331895873626.png?size=96",
            url: "https://www.youtube.com/channel/{ID_HERE}?sub_confirmation=true",
            border: "border-red-600/20",
            bg: "bg-red-500/20",
            types: [
                {
                    name: "subscribe",
                    requiredInput: false
                }
            ]
        },
        github: {
            emoji: "<:github:957340420801712269>",
            img: "https://cdn.discordapp.com/emojis/911995938833305600.png?size=96",
            url: "https://github.com/{USER_HERE}",
            border: "border-black/20",
            bg: "bg-black/20",
            types: [
                {
                    name: "follow",
                    requiredInput: false
                }
            ]
        },
        twitch: {
            emoji: "<:twitch:957340421175009331>",
            img: "https://cdn.discordapp.com/emojis/919278360453083156.png?size=96",
            url: "https://twitch.tv/{USER_HERE}",
            border: "border-violet-600/20",
            bg: "bg-violet-500/20",
            types: [
                {
                    name: "follow",
                    requiredInput: false
                }
            ]
        },
        discord: {
            emoji: "<:discord:957341118087983104>",
            img: "https://cdn.discordapp.com/emojis/919555859820994560.png?size=96",
            url: "https://discord.gg/{INVITE_HERE}",
            border: "border-white/20",
            bg: "bg-white/20",
            types: [
                {
                    name: "check_role",
                    requiredInput: false
                },
            ]
        }
    },
    authPath: "/v1/auth",
    connectionsPath: "/v1/connections",
    giveawayPerm: "MANAGE_GUILD",
    giveawayLimit: [ 5, 10, 15, 20 ],
    rerollLimit: [ 2, 10, 30, 50 ],
    defaultLang: "en",
    intervalMs: 10000,
    boostIntervalMs: 30000,
    levelNames: [ "Town", "Kingdom", "Empire" ],
    boostLevels: [ 2, 7, 14 ],
    gatewayIntents: [ "BOOST", "UNBOOST", "GIVEAWAY_FINISH", "GIVEAWAY_REROLL", "GIVEAWAY_JOIN", "GIVEAWAY_CREATE", "GIVEAWAY_DELETE" ],
    promoLength: 15,
    emojis: [ '🌵', '🎄', '🌲', '🌳', '🌴', '🌱', '🌿', '🍀', '🎍', '🎋', '🍃', '🍂', '🍁', '🍄', '🐚', '🌾', '💐', '🐠', '🐟', '🐬', '🐳', '🌷', '🌹', '🌺', '🌸', '🌼', '🌻', '🌞', '🌝', '🌟', '✨', '⚡', '💥', '🌈', '🍩', '🍪', '🏆', '🐧', '🐦', '🐤' ],
    sessionKey: "vhRYmP1A$zKdlge$#c8@@jLc!Gi5VO$yvl^nJCv2ZQba!%CJSyjLc!Gi5VO!%CJSyjLc!Gi5$yvl^n$zKdlge$#c8@@jJCv2",
    mongoURL: "mongodb+srv://giftix:WgIsufj7ZhEXwdgm0i17vcjjYJ4QfXCG@cluster0.mmcuf.mongodb.net/main?retryWrites=true&w=majority",
    token: "NzMxMjE5MTYzMzE3NTM0NzQw.Xwi26Q.A1qc22WDXmpqqF-9o0VCROK4N0c",
    cmdDir: "./src/commands",
    benefits: _lvl => ([
        {
            category: "feature",
            slug: "giveaway_limit_t1",
            title: "10 Active Giveaways",
            icon: "far fa-gift",
            infoText: "You can start 10 giveaways at once!",
            level: 1,
            unlocked: _lvl >= 1 ? true : false,
        },
        {
            category: "feature",
            slug: "giveaway_limit_t2",
            title: "15 Active Giveaways",
            icon: "far fa-gift-card",
            infoText: "You can start 15 giveaways at once!",
            level: 2,
            unlocked: _lvl >= 2 ? true : false,
        },
        {
            category: "feature",
            slug: "giveaway_limit_t3",
            title: "20 Active Giveaways",
            icon: "far fa-gifts",
            infoText: "You can start 20 giveaways at once!",
            level: 3,
            unlocked: _lvl >= 3 ? true : false,
        },
        {
            category: "feature",
            slug: "reroll_limit_t1",
            title: "10 Rerolls",
            icon: "far fa-sync-alt",
            infoText: "You can redetermine the winner 10 times!",
            level: 1,
            unlocked: _lvl >= 1 ? true : false,
        },
        {
            category: "feature",
            slug: "reroll_limit_t2",
            title: "30 Rerolls",
            icon: "far fa-sync-alt",
            infoText: "You can redetermine the winner 30 times!",
            level: 2,
            unlocked: _lvl >= 2 ? true : false,
        },
        {
            category: "feature",
            slug: "reroll_limit_t3",
            title: "50 Rerolls",
            icon: "far fa-sync-alt",
            infoText: "You can redetermine the winner 50 times!",
            level: 3,
            unlocked: _lvl >= 3 ? true : false,
        },
        {
            category: "feature",
            slug: "giveaway_passwords",
            title: "Giveaway Passwords",
            icon: "far fa-key",
            infoText: "You can participate in the giveaways with a password!",
            level: 1,
            unlocked: _lvl >= 1 ? true : false,
        },
        {
            category: "feature",
            slug: "embed_editor",
            title: "Embed Editor",
            icon: "far fa-pencil-paintbrush",
            infoText: "You can edit the appearance of the giveaway embed!",
            level: 3,
            unlocked: _lvl >= 3 ? true : false,
        },

        { category: "feature", slug: "blank", title: "", icon: "", infoText: "Soon!", level: 1, unlocked: _lvl >= 1 ? true : false },
        { category: "feature", slug: "blank", title: "", icon: "", infoText: "Soon!", level: 1, unlocked: _lvl >= 1 ? true : false },
        { category: "feature", slug: "blank", title: "", icon: "", infoText: "Soon!", level: 1, unlocked: _lvl >= 1 ? true : false },

        { category: "feature", slug: "blank", title: "", icon: "", infoText: "Soon!", level: 2, unlocked: _lvl >= 2 ? true : false },
        { category: "feature", slug: "blank", title: "", icon: "", infoText: "Soon!", level: 2, unlocked: _lvl >= 2 ? true : false },
        { category: "feature", slug: "blank", title: "", icon: "", infoText: "Soon!", level: 2, unlocked: _lvl >= 2 ? true : false },
        { category: "feature", slug: "blank", title: "", icon: "", infoText: "Soon!", level: 2, unlocked: _lvl >= 2 ? true : false },

        { category: "feature", slug: "blank", title: "", icon: "", infoText: "Soon!", level: 3, unlocked: _lvl >= 3 ? true : false },
        { category: "feature", slug: "blank", title: "", icon: "", infoText: "Soon!", level: 3, unlocked: _lvl >= 3 ? true : false },
        { category: "feature", slug: "blank", title: "", icon: "", infoText: "Soon!", level: 3, unlocked: _lvl >= 3 ? true : false },
    ])
};
