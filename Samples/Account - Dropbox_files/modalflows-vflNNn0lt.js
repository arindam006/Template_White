// Generated by CoffeeScript 1.3.3
var ModalFlow;

ModalFlow = (function() {

  function ModalFlow(title, icon, states, next_state_table, previous_state_table, initial, onStart) {
    var state, _i, _len, _ref;
    this.title = title;
    this.icon = icon;
    this.states = states;
    this.next_state_table = next_state_table;
    this.previous_state_table = previous_state_table;
    this.initial = initial;
    this.onStart = onStart;
    this._state_map = {};
    _ref = this.states;
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      state = _ref[_i];
      this._state_map[state.name] = state;
    }
    this.state = null;
    this._exit_listeners = [];
    this._cleanup_queue = [];
  }

  ModalFlow.prototype.start = function() {
    var state, _i, _len, _ref,
      _this = this;
    this.vars = {};
    _ref = this.states;
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      state = _ref[_i];
      state.next = this._next.bind(this, state);
      state.back = this._back.bind(this, state);
      if (state.onSubmit) {
        state.onSubmitFn = (function(state, e) {
          state.onSubmit(this, state, e);
          return false;
        }).bind(this, state);
      } else {
        state.onSubmitFn = (function(state, e) {
          state.next();
          return false;
        }).bind(this, state);
      }
      state.contents.on('submit', state.onSubmitFn);
      state.contents.find('.backbutton').on('click', state.back);
    }
    Modal.onHide = this._onExit.bind(this);
    if (this.onStart) {
      this.onStart();
    }
    this.to_state(this.initial);
    return false;
  };

  ModalFlow.prototype.to_state = function(state_name) {
    var title;
    this.state = this._state_map[state_name];
    title = this.title;
    if (this.state.title != null) {
      title = this.state.title;
    }
    Modal.icon_show(this.icon, title, this.state.contents[0]);
    return this.state.enter(this);
  };

  ModalFlow.prototype._next = function(current_state) {
    var next_state;
    if (current_state === this.state) {
      next_state = this.next_state_table[this.state.name](this);
      if (next_state === "__exit__") {
        return this.exit();
      } else {
        return this.to_state(next_state);
      }
    }
  };

  ModalFlow.prototype._back = function(current_state) {
    var next_state;
    if (current_state === this.state) {
      next_state = this.previous_state_table[this.state.name](this);
      if (next_state === "__cancel__") {
        return this.exit();
      } else if (next_state) {
        return this.to_state(next_state);
      }
    }
  };

  ModalFlow.prototype.exit = function() {
    return this._onExit();
  };

  ModalFlow.prototype._onExit = function(dismissed) {
    var listener, state, _i, _j, _len, _len1, _ref, _ref1;
    _ref = this.states;
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      state = _ref[_i];
      state.contents.off('submit', state.onSubmitFn);
    }
    this._cleanUpExitListeners();
    _ref1 = this._exit_listeners;
    for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
      listener = _ref1[_j];
      listener(dismissed);
    }
    Modal.onHide = null;
    return Modal.hide();
  };

  ModalFlow.prototype.addExitListener = function(fn) {
    return this._exit_listeners.push(fn);
  };

  ModalFlow.prototype.removeExitListener = function(fn) {
    return this._cleanup_queue.push(fn);
  };

  ModalFlow.prototype._cleanUpExitListeners = function() {
    var fn, index, _i, _len, _ref, _results;
    _ref = this._cleanup_queue;
    _results = [];
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      fn = _ref[_i];
      index = this._exit_listeners.indexOf(fn);
      _results.push(this._exit_listeners.splice(index, 1));
    }
    return _results;
  };

  return ModalFlow;

})();
