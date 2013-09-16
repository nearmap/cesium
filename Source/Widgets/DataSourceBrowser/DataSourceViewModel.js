/*global define*/
define([
        '../../Core/createGuid',
        '../../Core/defineProperties',
        '../../ThirdParty/knockout'
    ], function(
        createGuid,
        defineProperties,
        knockout) {
    "use strict";

    var DataSourceViewModel = function(name, rootViewModel, dataSource, dynamicObject) {
        var that = this;

        this._dataSource = dataSource;
        this.rootViewModel = rootViewModel;
        this.dynamicObject = dynamicObject;

        this.id = 'cesium-dataSourceBrowser-node-' + createGuid();
        this.name = name;
        this.children = [];
        this.expanded = false;

        knockout.track(this, ['name', 'children', 'expanded']);

        this.hasChildren = undefined;
        knockout.defineProperty(this, 'hasChildren', function() {
            return that.children.length > 0;
        });

        knockout.defineProperty(this, 'isSelected', function() {
            return rootViewModel.selectedItem === that;
        });
    };

    defineProperties(DataSourceViewModel.prototype, {
        /**
         * Gets an HTML arrow indicating expand status.
         * @memberof DataSourceBrowserViewModel.prototype
         * @type {string}
         */
        expandIndicator : {
            get : function() {
                return this.expanded ? '&#9660;' : '&#9658;';
            }
        },

        /**
         * Gets the {@link DataSource} that contains this item.
         * @memberof DataSourceViewModel.prototype
         * @type {DataSource}
         */
        dataSource : {
            get : function() {
                return this._dataSource;
            }
        }
    });

    DataSourceViewModel.prototype.select = function() {
        this.rootViewModel.selectedItem = this;
    };

    DataSourceViewModel.prototype.toggleExpanded = function() {
        this.expanded = !this.expanded;
    };

    return DataSourceViewModel;
});