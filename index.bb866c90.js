!function(){var e,t="https://api.thecatapi.com/v1",o="live_nyzZ4QjNtDq03IFxKqTnmDqyZDlfHDPE7tDYK56tjMFQ80XfJTc6gNUHpWGEEVPD";console.log(fetch("".concat(t).concat("/breeds","?").concat(o)).then((function(e){if(!e.ok)throw new Error(e.statusText);return e.json()}))),console.log(fetch("".concat(t,"/images/search?api_key=").concat(o,"&breed_ids=").concat(e)).then((function(e){if(!e.ok)throw new Error(e.status);return e.json()})));var c=document.querySelector(".breed-select");document.querySelector(".loader"),document.querySelector(".error"),document.querySelector(".cat-info");c.addEventListener("change",(function(){}))}();
//# sourceMappingURL=index.bb866c90.js.map