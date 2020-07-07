<div id="waifu">
			<div id="waifu-tips"></div>
			<canvas id="live2d" width="800" height="800"></canvas>
			<div id="waifu-tool">
				<span class="fa fa-lg fa-comment"></span>
				<span class="fa fa-lg fa-paper-plane"></span>
				<span class="fa fa-lg fa-user-circle"></span>
				<span class="fa fa-lg fa-street-view"></span>
				<span class="fa fa-lg fa-camera-retro"></span>
				<span class="fa fa-lg fa-info-circle"></span>
				<span class="fa fa-lg fa-times"></span>
			</div>
		</div><= 7) text="早上好！一日之计在于晨，美好的一天就要开始了。" ; else if (now> 7 && now <= 11) text="上午好！工作顺利嘛，不要久坐，多起来走动走动哦！" ; else if (now> 11 && now <= 13) text="中午了，工作了一个上午，现在是午餐时间！" ; else if (now> 13 && now <= 17) text="午后很容易犯困呢，今天的运动目标完成了吗？" ; else if (now> 17 && now <= 19) text="傍晚了！窗外夕阳的景色很美丽呢，最美不过夕阳红～" ; else if (now> 19 && now <= 21) text="晚上好，今天过得怎么样？" ; else if (now> 21 && now <= 23) text="["已经这么晚了呀，早点休息吧，晚安～"," "深夜时要爱护眼睛呀！"]; else ; } if (document.referrer !="=" "") { let referrer="new" url(document.referrer), domain="referrer.hostname.split(".")[1];" (location.hostname="==" referrer.hostname)>「${document.title.split(" - ")[0]}」`;
			else if (domain === "baidu") text = `Hello！来自 百度搜索 的朋友<br>你是搜索 <span>${referrer.search.split("&wd=")[1].split("&")[0]}</span> 找到的我吗？`;
			else if (domain === "so") text = `Hello！来自 360搜索 的朋友<br>你是搜索 <span>${referrer.search.split("&q=")[1].split("&")[0]}</span> 找到的我吗？`;
			else if (domain === "google") text = `Hello！来自 谷歌搜索 的朋友<br>欢迎阅读<span>「${document.title.split(" - ")[0]}」</span>`;
			else text = `Hello！来自 <span>${referrer.hostname}</span> 的朋友`;
		} else {
			text = `欢迎阅读<span>「${document.title.split(" - ")[0]}」</span>`;
		}
		showMessage(text, 7000, 8);
	})();

	function showHitokoto() {
		// 增加 hitokoto.cn 的 API
		fetch("https://v1.hitokoto.cn")
			.then(response => response.json())
			.then(result => {
				let text = `这句一言来自 <span>「${result.from}」</span>，是 <span>${result.creator}</span> 在 hitokoto.cn 投稿的。`;
				showMessage(result.hitokoto, 6000, 9);
				setTimeout(() => {
					showMessage(text, 4000, 9);
				}, 6000);
			});
	}

	function showMessage(text, timeout, priority) {
		if (!text || (sessionStorage.getItem("waifu-text") && sessionStorage.getItem("waifu-text") > priority)) return;
		if (messageTimer) {
			clearTimeout(messageTimer);
			messageTimer = null;
		}
		text = randomSelection(text);
		sessionStorage.setItem("waifu-text", priority);
		let tips = document.getElementById("waifu-tips");
		tips.innerHTML = text;
		tips.classList.add("waifu-tips-active");
		messageTimer = setTimeout(() => {
			sessionStorage.removeItem("waifu-text");
			tips.classList.remove("waifu-tips-active");
		}, timeout);
	}

	(function initModel() {
		let modelId = localStorage.getItem("modelId"),
			modelTexturesId = localStorage.getItem("modelTexturesId");
		if (modelId === null) {
			// 首次访问加载 指定模型 的 指定材质
			modelId = 1; // 模型 ID
			modelTexturesId = 53; // 材质 ID
		}
		loadModel(modelId, modelTexturesId);
		fetch(waifuPath)
			.then(response => response.json())
			.then(result => {
				window.addEventListener("mouseover", event => {
					for (let tips of result.mouseover) {
						if (!event.target.matches(tips.selector)) continue;
						let text = randomSelection(tips.text);
						text = text.replace("{text}", event.target.innerText);
						showMessage(text, 4000, 8);
						return;
					}
				});
				window.addEventListener("click", event => {
					for (let tips of result.click) {
						if (!event.target.matches(tips.selector)) continue;
						let text = randomSelection(tips.text);
						text = text.replace("{text}", event.target.innerText);
						showMessage(text, 4000, 8);
						return;
					}
				});
				result.seasons.forEach(tips => {
					let now = new Date(),
						after = tips.date.split("-")[0],
						before = tips.date.split("-")[1] || after;
					if ((after.split("/")[0] <= 1 now.getmonth() + && <="before.split("/")[0])" (after.split(" ")[1] now.getdate() { let text="randomSelection(tips.text);" now.getfullyear()); showmessage(text, 7000, true); messagearray.push(text); } }); })(); async function loadmodellist() response="await" fetch(`${cdnpath}model_list.json`); result="await" response.json(); modellist="result;" loadmodel(modelid, modeltexturesid, message) localstorage.setitem("modelid", modelid); localstorage.setitem("modeltexturesid", modeltexturesid); showmessage(message, 4000, 10); if (usecdn) (!modellist) await loadmodellist(); target="randomSelection(modelList.models[modelId]);" loadlive2d("live2d", `${cdnpath}model ${target} index.json`); else `${apipath}get ?id="${modelId}-${modelTexturesId}`);" console.log(`live2d 模型 ${modelid}-${modeltexturesid} 加载完成`); loadrandmodel() modelid="localStorage.getItem("modelId")," modeltexturesid="localStorage.getItem("modelTexturesId");" showmessage("我的新衣服好看嘛？", 可选 "rand"(随机), "switch"(顺序) fetch(`${apipath}rand_textures .then(response> response.json())
				.then(result => {
					if (result.textures.id === 1 && (modelTexturesId === 1 || modelTexturesId === 0)) showMessage("我还没有其他衣服呢！", 4000, 10);
					else loadModel(modelId, result.textures.id, "我的新衣服好看嘛？");
				});
		}
	}

	async function loadOtherModel() {
		let modelId = localStorage.getItem("modelId");
		if (useCDN) {
			if (!modelList) await loadModelList();
			let index = (++modelId >= modelList.models.length) ? 0 : modelId;
			loadModel(index, 0, modelList.messages[index]);
		} else {
			fetch(`${apiPath}switch/?id=${modelId}`)
				.then(response => response.json())
				.then(result => {
					loadModel(result.model.id, 0, result.model.message);
				});
		}
	}
}

function initWidget(config, apiPath) {
	if (typeof config === "string") {
		config = {
			waifuPath: config,
			apiPath
		};
	}
	document.body.insertAdjacentHTML("beforeend", `<div id="waifu-toggle">
			<span>看板娘</span>
		</div>`);
	let toggle = document.getElementById("waifu-toggle");
	toggle.addEventListener("click", () => {
		toggle.classList.remove("waifu-toggle-active");
		if (toggle.getAttribute("first-time")) {
			loadWidget(config);
			toggle.removeAttribute("first-time");
		} else {
			localStorage.removeItem("waifu-display");
			document.getElementById("waifu").style.display = "";
			setTimeout(() => {
				document.getElementById("waifu").style.bottom = 0;
			}, 0);
		}
	});
	if (localStorage.getItem("waifu-display") && Date.now() - localStorage.getItem("waifu-display") <= 86400000) { toggle.setattribute("first-time", true); settimeout(()> {
			toggle.classList.add("waifu-toggle-active");
		}, 0);
	} else {
		loadWidget(config);
	}
}
</=></=></=></=></=></=></=></=></=>