const config = require("../../../../award.config.js");
const axios = require("axios");
const express = require("express");
const router = express.Router();

module.exports = client => {
    router.get("/team", async (req, res) => {
        try {
            const team = (await Promise.all(config.team.map(async member => {
                const { data } = await axios.get("https://linkcord.swoth.xyz/api/v1/user/" + member.id).catch(() => {});
                member.spotify = data ? (data.data ? data.data.spotify || false : false) : false;
                member.user = await client.users.fetch(member.id).catch(() => {});
                return member;
            }))).filter(_m => typeof _m.user == "object");
            
            res.json({ 
                success: true, 
                message: req.locale["global"]["successful"], 
                data: team
            });
        } catch(err) {
            console.log(err);
            res.json({ success: false, message: req.locale["global"]["something_went_wrong"], data: null });
        };
    });
    
    return router;
};