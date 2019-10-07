
function load_from_json(data, slot, jo, base_slot) {
  slot[data.name] = data.failsafe;
  if (base_slot) {
    slot[data.name] = base_slot[data.name];
  }
  if (jo[v.name]) {
    slot[data.name] = jo[data.name];
  }
}

function load_list_from_json(data, slot, jo, base_slot) {
  slot[data.name] = data.failsafe;
  if (base_slot) {
    slot[data.name] = base_slot[data.name];
  }
  if (jo[data.name]) {
    if (data.set_after_clear) {
      slot[data.name] = data.failsafe;
    }
    var tmp = jo[data.name];
    if (!Array.isArray(tmp)) {
      tmp = [tmp];
    }
    Array.prototype.push.apply(slot[data.name], tmp);
  }
}


gfxClass = function(gfx_id, nested = 0) {
  this.id = gfx_id;
  this.json = internal_get_gfx_from_id(this.id, nested);
  this.nested = nested;
  this.valid = this.json != null;
  if (this.valid) {
    this.init();
  }
};

gfxClass.prototype.getJson = function() {
  return this.json;
};

gfxClass.prototype.getId = function() {
  return this.id;
};


gfxClass.prototype.init = function() {
  var base = this.getCopyFrom();
  var variables = [
    { name: "magazine", failsafe: 0 },
    { name: "ammo", failsafe: 0 }
  ];
  var lists = [
    { name: "items", failsafe: [] }
  ];

  for (v of variables) {
    load_from_json(v, this, this.json, base);
  }

  for (v of lists) {
    load_list_from_json(v, this, this.json, base);
  }
  


  this.initArmorData();
  this.initGunData();
  this.initBookData();
};

gfxClass.prototype.getName = function() {
  return this.name;
};

gfxClass.prototype.getDescription = function() {
  return this.description;
};


gfxClass.prototype.displayNameWithSymbol = function() {
  var string_html =
    "<font color=" +
    this.getSymbolColor() +
    ">" +
    this.getSymbol() +
    "</font> " +
    this.getName();

  return string_html;
};
