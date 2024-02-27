$(function () {
  chrome.storage.sync.get("limit", function (budget) {
    $("#limit").val(budget.limit);
  });

  $("#saveLimit").click(function () {
    var limit = $("#limit").val();

    if (limit) {
      chrome.storage.sync.set({ limit: limit }, function () {
        close();
      });
    }
  });

  $("#resetTotal").click(function () {
    chrome.storage.sync.set({ total: 0 }, function () {
      var notifOptions = {
        // can checkout chrome developer website for more options
        type: "basic",
        iconUrl: "money-bag.png",
        title: "Total reset",
        message: "Total has been reset to 0!",
      };
      chrome.notifications.create("limitNotif", notifOptions);
    });
  });
});
