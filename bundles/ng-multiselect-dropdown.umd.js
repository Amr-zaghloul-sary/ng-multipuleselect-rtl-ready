(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/forms'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('ng-multiselect-dropdown', ['exports', '@angular/core', '@angular/forms', '@angular/common'], factory) :
    (global = global || self, factory(global['ng-multiselect-dropdown'] = {}, global.ng.core, global.ng.forms, global.ng.common));
}(this, (function (exports, core, forms, common) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __exportStar(m, exports) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m) return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

    var ListItem = /** @class */ (function () {
        function ListItem(source) {
            if (typeof source === 'string' || typeof source === 'number') {
                this.id = this.text = source;
                this.isDisabled = false;
            }
            if (typeof source === 'object') {
                this.id = source.id;
                this.text = source.text;
                this.isDisabled = source.isDisabled;
            }
        }
        return ListItem;
    }());

    var DROPDOWN_CONTROL_VALUE_ACCESSOR = {
        provide: forms.NG_VALUE_ACCESSOR,
        useExisting: core.forwardRef(function () { return MultiSelectComponent; }),
        multi: true
    };
    var noop = function () { };
    var ɵ0 = noop;
    var MultiSelectComponent = /** @class */ (function () {
        function MultiSelectComponent(cdr) {
            this.cdr = cdr;
            this._data = [];
            this.selectedItems = [];
            this.isDropdownOpen = true;
            this._placeholder = "Select";
            this._sourceDataType = null; // to keep note of the source data type. could be array of string/number/object
            this._sourceDataFields = []; // store source data fields names
            this.filter = new ListItem(this.data);
            this.defaultSettings = {
                singleSelection: false,
                idField: "id",
                textField: "text",
                disabledField: "isDisabled",
                enableCheckAll: true,
                selectAllText: "Select All",
                unSelectAllText: "UnSelect All",
                allowSearchFilter: false,
                limitSelection: -1,
                clearSearchFilter: true,
                maxHeight: 197,
                itemsShowLimit: 999999999999,
                searchPlaceholderText: "Search",
                noDataAvailablePlaceholderText: "No data available",
                closeDropDownOnSelection: false,
                showSelectedItemsAtTop: false,
                defaultOpen: false,
                allowRemoteDataSearch: false
            };
            this.disabled = false;
            this.onFilterChange = new core.EventEmitter();
            this.onDropDownClose = new core.EventEmitter();
            this.onSelect = new core.EventEmitter();
            this.onDeSelect = new core.EventEmitter();
            this.onSelectAll = new core.EventEmitter();
            this.onDeSelectAll = new core.EventEmitter();
            this.onTouchedCallback = noop;
            this.onChangeCallback = noop;
        }
        Object.defineProperty(MultiSelectComponent.prototype, "placeholder", {
            set: function (value) {
                if (value) {
                    this._placeholder = value;
                }
                else {
                    this._placeholder = "Select";
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MultiSelectComponent.prototype, "settings", {
            set: function (value) {
                if (value) {
                    this._settings = Object.assign(this.defaultSettings, value);
                }
                else {
                    this._settings = Object.assign(this.defaultSettings);
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MultiSelectComponent.prototype, "data", {
            set: function (value) {
                var _this = this;
                if (!value) {
                    this._data = [];
                }
                else {
                    var firstItem = value[0];
                    this._sourceDataType = typeof firstItem;
                    this._sourceDataFields = this.getFields(firstItem);
                    this._data = value.map(function (item) {
                        return typeof item === "string" || typeof item === "number"
                            ? new ListItem(item)
                            : new ListItem({
                                id: item[_this._settings.idField],
                                text: item[_this._settings.textField],
                                isDisabled: item[_this._settings.disabledField]
                            });
                    });
                }
            },
            enumerable: true,
            configurable: true
        });
        MultiSelectComponent.prototype.onFilterTextChange = function ($event) {
            this.onFilterChange.emit($event);
        };
        MultiSelectComponent.prototype.onItemClick = function ($event, item) {
            if (this.disabled || item.isDisabled) {
                return false;
            }
            var found = this.isSelected(item);
            var allowAdd = this._settings.limitSelection === -1 || (this._settings.limitSelection > 0 && this.selectedItems.length < this._settings.limitSelection);
            if (!found) {
                if (allowAdd) {
                    this.addSelected(item);
                }
            }
            else {
                this.removeSelected(item);
            }
            if (this._settings.singleSelection && this._settings.closeDropDownOnSelection) {
                this.closeDropdown();
            }
        };
        MultiSelectComponent.prototype.writeValue = function (value) {
            var _this = this;
            if (value !== undefined && value !== null && value.length > 0) {
                if (this._settings.singleSelection) {
                    try {
                        if (value.length >= 1) {
                            var firstItem = value[0];
                            this.selectedItems = [
                                typeof firstItem === "string" || typeof firstItem === "number"
                                    ? new ListItem(firstItem)
                                    : new ListItem({
                                        id: firstItem[this._settings.idField],
                                        text: firstItem[this._settings.textField],
                                        isDisabled: firstItem[this._settings.disabledField]
                                    })
                            ];
                        }
                    }
                    catch (e) {
                        // console.error(e.body.msg);
                    }
                }
                else {
                    var _data = value.map(function (item) {
                        return typeof item === "string" || typeof item === "number"
                            ? new ListItem(item)
                            : new ListItem({
                                id: item[_this._settings.idField],
                                text: item[_this._settings.textField],
                                isDisabled: item[_this._settings.disabledField]
                            });
                    });
                    if (this._settings.limitSelection > 0) {
                        this.selectedItems = _data.splice(0, this._settings.limitSelection);
                    }
                    else {
                        this.selectedItems = _data;
                    }
                }
            }
            else {
                this.selectedItems = [];
            }
            this.onChangeCallback(value);
        };
        // From ControlValueAccessor interface
        MultiSelectComponent.prototype.registerOnChange = function (fn) {
            this.onChangeCallback = fn;
        };
        // From ControlValueAccessor interface
        MultiSelectComponent.prototype.registerOnTouched = function (fn) {
            this.onTouchedCallback = fn;
        };
        // Set touched on blur
        MultiSelectComponent.prototype.onTouched = function () {
            this.closeDropdown();
            this.onTouchedCallback();
        };
        MultiSelectComponent.prototype.trackByFn = function (index, item) {
            return item.id;
        };
        MultiSelectComponent.prototype.isSelected = function (clickedItem) {
            var found = false;
            this.selectedItems.forEach(function (item) {
                if (clickedItem.id === item.id) {
                    found = true;
                }
            });
            return found;
        };
        MultiSelectComponent.prototype.isLimitSelectionReached = function () {
            return this._settings.limitSelection === this.selectedItems.length;
        };
        MultiSelectComponent.prototype.isAllItemsSelected = function () {
            // get disabld item count
            var itemDisabledCount = this._data.filter(function (item) { return item.isDisabled; }).length;
            // take disabled items into consideration when checking
            if ((!this.data || this.data.length === 0) && this._settings.allowRemoteDataSearch) {
                return false;
            }
            return this._data.length === this.selectedItems.length + itemDisabledCount;
        };
        MultiSelectComponent.prototype.showButton = function () {
            if (!this._settings.singleSelection) {
                if (this._settings.limitSelection > 0) {
                    return false;
                }
                // this._settings.enableCheckAll = this._settings.limitSelection === -1 ? true : false;
                return true; // !this._settings.singleSelection && this._settings.enableCheckAll && this._data.length > 0;
            }
            else {
                // should be disabled in single selection mode
                return false;
            }
        };
        MultiSelectComponent.prototype.itemShowRemaining = function () {
            return this.selectedItems.length - this._settings.itemsShowLimit;
        };
        MultiSelectComponent.prototype.addSelected = function (item) {
            if (this._settings.singleSelection) {
                this.selectedItems = [];
                this.selectedItems.push(item);
            }
            else {
                this.selectedItems.push(item);
            }
            this.onChangeCallback(this.emittedValue(this.selectedItems));
            this.onSelect.emit(this.emittedValue(item));
        };
        MultiSelectComponent.prototype.removeSelected = function (itemSel) {
            var _this = this;
            this.selectedItems.forEach(function (item) {
                if (itemSel.id === item.id) {
                    _this.selectedItems.splice(_this.selectedItems.indexOf(item), 1);
                }
            });
            this.onChangeCallback(this.emittedValue(this.selectedItems));
            this.onDeSelect.emit(this.emittedValue(itemSel));
        };
        MultiSelectComponent.prototype.emittedValue = function (val) {
            var _this = this;
            var selected = [];
            if (Array.isArray(val)) {
                val.map(function (item) {
                    selected.push(_this.objectify(item));
                });
            }
            else {
                if (val) {
                    return this.objectify(val);
                }
            }
            return selected;
        };
        MultiSelectComponent.prototype.objectify = function (val) {
            if (this._sourceDataType === 'object') {
                var obj = {};
                obj[this._settings.idField] = val.id;
                obj[this._settings.textField] = val.text;
                if (this._sourceDataFields.includes(this._settings.disabledField)) {
                    obj[this._settings.disabledField] = val.isDisabled;
                }
                return obj;
            }
            if (this._sourceDataType === 'number') {
                return Number(val.id);
            }
            else {
                return val.text;
            }
        };
        MultiSelectComponent.prototype.toggleDropdown = function (evt) {
            evt.preventDefault();
            if (this.disabled && this._settings.singleSelection) {
                return;
            }
            this._settings.defaultOpen = !this._settings.defaultOpen;
            if (!this._settings.defaultOpen) {
                this.onDropDownClose.emit();
            }
        };
        MultiSelectComponent.prototype.closeDropdown = function () {
            this._settings.defaultOpen = false;
            // clear search text
            if (this._settings.clearSearchFilter) {
                this.filter.text = "";
            }
            this.onDropDownClose.emit();
        };
        MultiSelectComponent.prototype.toggleSelectAll = function () {
            if (this.disabled) {
                return false;
            }
            if (!this.isAllItemsSelected()) {
                // filter out disabled item first before slicing
                this.selectedItems = this._data.filter(function (item) { return !item.isDisabled; }).slice();
                this.onSelectAll.emit(this.emittedValue(this.selectedItems));
            }
            else {
                this.selectedItems = [];
                this.onDeSelectAll.emit(this.emittedValue(this.selectedItems));
            }
            this.onChangeCallback(this.emittedValue(this.selectedItems));
        };
        MultiSelectComponent.prototype.getFields = function (inputData) {
            var fields = [];
            if (typeof inputData !== "object") {
                return fields;
            }
            // tslint:disable-next-line:forin
            for (var prop in inputData) {
                fields.push(prop);
            }
            return fields;
        };
        MultiSelectComponent.ctorParameters = function () { return [
            { type: core.ChangeDetectorRef }
        ]; };
        __decorate([
            core.Input()
        ], MultiSelectComponent.prototype, "placeholder", null);
        __decorate([
            core.Input()
        ], MultiSelectComponent.prototype, "disabled", void 0);
        __decorate([
            core.Input()
        ], MultiSelectComponent.prototype, "settings", null);
        __decorate([
            core.Input()
        ], MultiSelectComponent.prototype, "data", null);
        __decorate([
            core.Output("onFilterChange")
        ], MultiSelectComponent.prototype, "onFilterChange", void 0);
        __decorate([
            core.Output("onDropDownClose")
        ], MultiSelectComponent.prototype, "onDropDownClose", void 0);
        __decorate([
            core.Output("onSelect")
        ], MultiSelectComponent.prototype, "onSelect", void 0);
        __decorate([
            core.Output("onDeSelect")
        ], MultiSelectComponent.prototype, "onDeSelect", void 0);
        __decorate([
            core.Output("onSelectAll")
        ], MultiSelectComponent.prototype, "onSelectAll", void 0);
        __decorate([
            core.Output("onDeSelectAll")
        ], MultiSelectComponent.prototype, "onDeSelectAll", void 0);
        __decorate([
            core.HostListener("blur")
        ], MultiSelectComponent.prototype, "onTouched", null);
        MultiSelectComponent = __decorate([
            core.Component({
                selector: "ng-multiselect-dropdown",
                template: "<div tabindex=\"=0\" (blur)=\"onTouched()\" class=\"multiselect-dropdown\" (clickOutside)=\"closeDropdown()\">\n  <div [class.disabled]=\"disabled\">\n    <span tabindex=\"-1\" class=\"dropdown-btn\" (click)=\"toggleDropdown($event)\">\n      <span *ngIf=\"selectedItems.length == 0\">{{_placeholder}}</span>\n      <span class=\"selected-item\" *ngFor=\"let item of selectedItems;trackBy: trackByFn;let k = index\" [hidden]=\"k > _settings.itemsShowLimit-1\">\n        {{item.text}}\n        <a style=\"padding-top:2px;padding-left:2px;color:white\" (click)=\"onItemClick($event,item)\">x</a>\n      </span>\n      <span style=\"padding-right:4px\">\n        <span style=\"padding-right: 6px;\" *ngIf=\"itemShowRemaining()>0\">+{{itemShowRemaining()}}</span>\n        <span [ngClass]=\"_settings.defaultOpen ? 'dropdown-up' : 'dropdown-down'\"></span>\n      </span>\n    </span>\n  </div>\n  <div class=\"dropdown-list\" [hidden]=\"!_settings.defaultOpen\">\n    <ul class=\"item1\">\n      <li (click)=\"toggleSelectAll()\" *ngIf=\"(_data.length > 0 || _settings.allowRemoteDataSearch) && !_settings.singleSelection && _settings.enableCheckAll && _settings.limitSelection===-1\" class=\"multiselect-item-checkbox\" style=\"border-bottom: 1px solid #ccc;padding:10px\">\n        <input type=\"checkbox\" aria-label=\"multiselect-select-all\" [checked]=\"isAllItemsSelected()\" [disabled]=\"disabled || isLimitSelectionReached()\" />\n        <div>{{!isAllItemsSelected() ? _settings.selectAllText : _settings.unSelectAllText}}</div>\n      </li>\n      <li class=\"filter-textbox\" *ngIf=\"(_data.length>0 || _settings.allowRemoteDataSearch) && _settings.allowSearchFilter\">\n        <input type=\"text\" aria-label=\"multiselect-search\" [readOnly]=\"disabled\" [placeholder]=\"_settings.searchPlaceholderText\" [(ngModel)]=\"filter.text\" (ngModelChange)=\"onFilterTextChange($event)\">\n      </li>\n    </ul>\n    <ul class=\"item2\" [style.maxHeight]=\"_settings.maxHeight+'px'\">\n      <li *ngFor=\"let item of _data | multiSelectFilter:filter; let i = index;\" (click)=\"onItemClick($event,item)\" class=\"multiselect-item-checkbox\">\n        <input type=\"checkbox\" aria-label=\"multiselect-item\" [checked]=\"isSelected(item)\" [disabled]=\"disabled || (isLimitSelectionReached() && !isSelected(item)) || item.isDisabled\" />\n        <div>{{item.text}}</div>\n      </li>\n      <li class='no-data' *ngIf=\"_data.length == 0 && !_settings.allowRemoteDataSearch\">\n        <h5>{{_settings.noDataAvailablePlaceholderText}}</h5>\n      </li>\n    </ul>\n  </div>\n</div>\n",
                providers: [DROPDOWN_CONTROL_VALUE_ACCESSOR],
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                styles: [".multiselect-dropdown{position:relative;width:100%;font-size:inherit;font-family:inherit}.multiselect-dropdown .dropdown-btn{display:inline-block;border:1px solid #adadad;width:100%;padding:6px 12px;margin-bottom:0;font-weight:400;line-height:1.52857143;text-align:left;vertical-align:middle;cursor:pointer;background-image:none;border-radius:4px}.multiselect-dropdown .dropdown-btn .selected-item{border:1px solid #337ab7;margin-right:4px;background:#337ab7;padding:0 5px;color:#fff;border-radius:2px;float:left}.multiselect-dropdown .dropdown-btn .selected-item a{text-decoration:none}.multiselect-dropdown .dropdown-btn .selected-item:hover{box-shadow:1px 1px #959595}.multiselect-dropdown .dropdown-btn .dropdown-down{display:inline-block;top:10px;width:0;height:0;border-top:10px solid #adadad;border-left:10px solid transparent;border-right:10px solid transparent}.multiselect-dropdown .dropdown-btn .dropdown-up{display:inline-block;width:0;height:0;border-bottom:10px solid #adadad;border-left:10px solid transparent;border-right:10px solid transparent}.multiselect-dropdown .disabled>span{background-color:#eceeef}.dropdown-list{position:absolute;padding-top:6px;width:100%;z-index:9999;border:1px solid #ccc;border-radius:3px;background:#fff;margin-top:10px;box-shadow:0 1px 5px #959595}.dropdown-list ul{padding:0;list-style:none;overflow:auto;margin:0}.dropdown-list li{padding:6px 10px;cursor:pointer;text-align:left}.dropdown-list .filter-textbox{border-bottom:1px solid #ccc;position:relative;padding:10px}.dropdown-list .filter-textbox input{border:0;width:100%;padding:0 0 0 26px}.dropdown-list .filter-textbox input:focus{outline:0}.multiselect-item-checkbox input[type=checkbox]{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}.multiselect-item-checkbox input[type=checkbox]:focus+div:before,.multiselect-item-checkbox input[type=checkbox]:hover+div:before{border-color:#337ab7;background-color:#f2f2f2}.multiselect-item-checkbox input[type=checkbox]:active+div:before{transition-duration:0s}.multiselect-item-checkbox input[type=checkbox]+div{position:relative;padding-left:2em;vertical-align:middle;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;margin:0;color:#000}.multiselect-item-checkbox input[type=checkbox]+div:before{box-sizing:content-box;content:'';color:#337ab7;position:absolute;top:50%;left:0;width:14px;height:14px;margin-top:-9px;border:2px solid #337ab7;text-align:center;transition:.4s}.multiselect-item-checkbox input[type=checkbox]+div:after{box-sizing:content-box;content:'';position:absolute;transform:scale(0);transform-origin:50%;transition:transform .2s ease-out;background-color:transparent;top:50%;left:4px;width:8px;height:3px;margin-top:-4px;border-style:solid;border-color:#fff;border-width:0 0 3px 3px;-o-border-image:none;border-image:none;transform:rotate(-45deg) scale(0)}.multiselect-item-checkbox input[type=checkbox]:disabled+div:before{border-color:#ccc}.multiselect-item-checkbox input[type=checkbox]:disabled:focus+div:before .multiselect-item-checkbox input[type=checkbox]:disabled:hover+div:before{background-color:inherit}.multiselect-item-checkbox input[type=checkbox]:disabled:checked+div:before{background-color:#ccc}.multiselect-item-checkbox input[type=checkbox]:checked+div:after{content:'';transition:transform .2s ease-out;transform:rotate(-45deg) scale(1)}.multiselect-item-checkbox input[type=checkbox]:checked+div:before{-webkit-animation:.2s ease-in borderscale;animation:.2s ease-in borderscale;background:#337ab7}@-webkit-keyframes borderscale{50%{box-shadow:0 0 0 2px #337ab7}}@keyframes borderscale{50%{box-shadow:0 0 0 2px #337ab7}}"]
            })
        ], MultiSelectComponent);
        return MultiSelectComponent;
    }());

    var ClickOutsideDirective = /** @class */ (function () {
        function ClickOutsideDirective(_elementRef) {
            this._elementRef = _elementRef;
            this.clickOutside = new core.EventEmitter();
        }
        ClickOutsideDirective.prototype.onClick = function (event, targetElement) {
            if (!targetElement) {
                return;
            }
            var clickedInside = this._elementRef.nativeElement.contains(targetElement);
            if (!clickedInside) {
                this.clickOutside.emit(event);
            }
        };
        ClickOutsideDirective.ctorParameters = function () { return [
            { type: core.ElementRef }
        ]; };
        __decorate([
            core.Output()
        ], ClickOutsideDirective.prototype, "clickOutside", void 0);
        __decorate([
            core.HostListener('document:click', ['$event', '$event.target'])
        ], ClickOutsideDirective.prototype, "onClick", null);
        ClickOutsideDirective = __decorate([
            core.Directive({
                selector: '[clickOutside]'
            })
        ], ClickOutsideDirective);
        return ClickOutsideDirective;
    }());

    var ListFilterPipe = /** @class */ (function () {
        function ListFilterPipe() {
        }
        ListFilterPipe.prototype.transform = function (items, filter) {
            var _this = this;
            if (!items || !filter) {
                return items;
            }
            return items.filter(function (item) { return _this.applyFilter(item, filter); });
        };
        ListFilterPipe.prototype.applyFilter = function (item, filter) {
            if (typeof item.text === 'string' && typeof filter.text === 'string') {
                return !(filter.text && item.text && item.text.toLowerCase().indexOf(filter.text.toLowerCase()) === -1);
            }
            else {
                return !(filter.text && item.text && item.text.toString().toLowerCase().indexOf(filter.text.toString().toLowerCase()) === -1);
            }
        };
        ListFilterPipe = __decorate([
            core.Pipe({
                name: 'multiSelectFilter',
                pure: false
            })
        ], ListFilterPipe);
        return ListFilterPipe;
    }());

    var NgMultiSelectDropDownModule = /** @class */ (function () {
        function NgMultiSelectDropDownModule() {
        }
        NgMultiSelectDropDownModule_1 = NgMultiSelectDropDownModule;
        NgMultiSelectDropDownModule.forRoot = function () {
            return {
                ngModule: NgMultiSelectDropDownModule_1
            };
        };
        var NgMultiSelectDropDownModule_1;
        NgMultiSelectDropDownModule = NgMultiSelectDropDownModule_1 = __decorate([
            core.NgModule({
                imports: [common.CommonModule, forms.FormsModule],
                declarations: [MultiSelectComponent, ClickOutsideDirective, ListFilterPipe],
                exports: [MultiSelectComponent]
            })
        ], NgMultiSelectDropDownModule);
        return NgMultiSelectDropDownModule;
    }());

    exports.MultiSelectComponent = MultiSelectComponent;
    exports.NgMultiSelectDropDownModule = NgMultiSelectDropDownModule;
    exports.ɵa = DROPDOWN_CONTROL_VALUE_ACCESSOR;
    exports.ɵb = ClickOutsideDirective;
    exports.ɵc = ListFilterPipe;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ng-multiselect-dropdown.umd.js.map
