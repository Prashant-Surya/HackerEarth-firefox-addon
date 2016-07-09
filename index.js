var { ToggleButton } = require('sdk/ui/button/toggle');
var panels = require("sdk/panel");
var self = require("sdk/self");

var button = ToggleButton({
  id: "my-button",
  label: "my button",
  icon: {
    "16": "./icon.png",
    "32": "./icon.png",
    "64": "./icon.png"
  },
  onChange: handleChange
});

var panel = panels.Panel({
  contentURL: self.data.url("index.html"),
  onHide: handleHide,
  contextMenu: true,
  width: 350,
  height: 1000
});

function handleChange(state){
    panel.show({
      position: button
    });
}

function handleHide() {
  button.state('window', {checked: false});
}

/*var notifications = require("sdk/notifications");
notifications.notify({
  title: "Jabberwocky",
  text: "'Twas brillig, and the slithy toves",
  data: "did gyre and gimble in the wabe",
  onClick: function (data) {
    console.log(data);
    // console.log(this.data) would produce the same result.
  }
});*/