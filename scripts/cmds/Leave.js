module.exports = {
	config: {
		name: "leave",
		version: "1.0",
		author: "NTKhang",
		cooldowns: 5,
		role: 1,
		description: {
			en: "Make the bot leave the current group chat"
		},
		category: "box chat",
		guide: {
			en: "{pn} leave"
		}
	},

	langs: {
		en: {
			success: "👋 Goodbye everyone! I'm leaving this group.",
			error: "❌ I couldn't leave this group."
		}
	},

	onStart: async function ({ message, event, api, getLang }) {
		try {
			await message.reply(getLang("success"));
			return api.removeUserFromGroup(api.getCurrentUserID(), event.threadID);
		}
		catch (e) {
			return message.reply(getLang("error"));
		}
	}
};
