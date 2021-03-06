// Generated by CoffeeScript 1.3.3
var DBTooltip, InfoTooltip,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

DBTooltip = (function() {

  DBTooltip.prototype.tooltip_shown = false;

  function DBTooltip(prompt, tooltip) {
    var $clone;
    this.prompt = prompt;
    this.tooltip = tooltip;
    this.hover_target = this.find_hover_target();
    this.listen();
    $clone = this.tooltip.clone().appendTo("body");
    $clone.css({
      position: "static",
      display: "inline-block"
    });
    this.tooltip.css({
      width: $clone.width(),
      position: "absolute",
      display: "none"
    });
    $clone.remove();
  }

  DBTooltip.prototype.listen = function() {
    var el, _i, _len, _ref, _results,
      _this = this;
    _ref = [this.hover_target, this.tooltip];
    _results = [];
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      el = _ref[_i];
      el.mouseenter(function() {
        clearTimeout(_this.tooltip.data("timeout_id"));
        return _this.show_tooltip();
      });
      _results.push(el.mouseleave(function() {
        var timeout_id;
        timeout_id = setTimeout((function() {
          return _this.hide_tooltip();
        }), 200);
        return _this.tooltip.data("timeout_id", timeout_id);
      }));
    }
    return _results;
  };

  DBTooltip.prototype.find_hover_target = function() {
    return this.prompt;
  };

  DBTooltip.prototype.show_tooltip = function(e) {
    var position;
    if (this.tooltip_shown) {
      return;
    }
    position = this.hover_target.position();
    this.tooltip.css("top", position.top - this.tooltip.outerHeight() / 2 + this.hover_target.outerHeight() / 2);
    this.tooltip.css("left", position.left + this.hover_target.width() + 2);
    this.tooltip.show();
    this.tooltip.animate({
      left: "+=7"
    }, 50);
    return this.tooltip_shown = true;
  };

  DBTooltip.prototype.hide_tooltip = function() {
    this.tooltip.hide();
    return this.tooltip_shown = false;
  };

  return DBTooltip;

})();

InfoTooltip = (function(_super) {

  __extends(InfoTooltip, _super);

  function InfoTooltip() {
    return InfoTooltip.__super__.constructor.apply(this, arguments);
  }

  InfoTooltip.prototype.find_hover_target = function() {
    return this.prompt.find(".sprite");
  };

  return InfoTooltip;

})(DBTooltip);
