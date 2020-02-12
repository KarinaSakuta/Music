(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{11:function(e,t,a){e.exports=a(17)},16:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),i=a(9),l=a.n(i),s=(a(16),a(3)),c=a(4),o=a(7),p=a(5),u=a(6),g=a(10),m=a(1),h=a(2),_=[5,10,20,30],y=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(o.a)(this,Object(p.a)(t).call(this))).state={filterBySinger:"All",filterByGanre:"All",filterByYear:"All",sortingParameter:"None",list:h,currentPage:1,pageSize:5},e.onFilterChangeBySinger=e.onFilterChangeBySinger.bind(Object(m.a)(e)),e.onFilterChangeByGanre=e.onFilterChangeByGanre.bind(Object(m.a)(e)),e.onFilterChangeByYear=e.onFilterChangeByYear.bind(Object(m.a)(e)),e.onNextClick=e.onNextClick.bind(Object(m.a)(e)),e.onPrevClick=e.onPrevClick.bind(Object(m.a)(e)),e.onChangePageSize=e.onChangePageSize.bind(Object(m.a)(e)),e}return Object(u.a)(t,e),Object(c.a)(t,[{key:"getFilteredMusicList",value:function(e){var t=this;return"All"!==this.state.filterBySinger&&(e=e.filter((function(e){return e.singer===t.state.filterBySinger}))),"All"!==this.state.filterByGanre&&(e=e.filter((function(e){return e.ganre===t.state.filterByGanre}))),"All"!==this.state.filterByYear&&(e=e.filter((function(e){return e.year===t.state.filterByYear}))),e}},{key:"getSortedMusicList",value:function(e){var t=this;return"None"===this.state.sortingParameter?e:Object(g.a)(e).sort((function(e,a){return e[t.state.sortingParameter]>a[t.state.sortingParameter]?1:e[t.state.sortingParameter]<a[t.state.sortingParameter]?-1:0}))}},{key:"getPaginatedMusicList",value:function(e){var t=(this.state.currentPage-1)*this.state.pageSize,a=t+this.state.pageSize;return e.slice(t,a)}},{key:"getFormattedMusicList",value:function(e){var t=this.getFilteredMusicList(e),a=this.getSortedMusicList(t);return this.getPaginatedMusicList(a)}},{key:"getMaxPage",value:function(){return this.state.list.music.length/this.state.pageSize}},{key:"unique",value:function(e){var t=[],a=!0,r=!1,n=void 0;try{for(var i,l=e[Symbol.iterator]();!(a=(i=l.next()).done);a=!0){var s=i.value;t.includes(s)||t.push(s)}}catch(c){r=!0,n=c}finally{try{a||null==l.return||l.return()}finally{if(r)throw n}}return t}},{key:"onFilterChangeBySinger",value:function(e){this.setState({filterBySinger:e.target.value})}},{key:"onFilterChangeByGanre",value:function(e){this.setState({filterByGanre:e.target.value})}},{key:"onFilterChangeByYear",value:function(e){this.setState({filterByYear:e.target.value})}},{key:"onSortingChange",value:function(e){this.setState({sortingParameter:e})}},{key:"onPrevClick",value:function(){this.state.currentPage-1!==0&&this.setState({currentPage:this.state.currentPage-1})}},{key:"onNextClick",value:function(){this.state.currentPage+1>this.getMaxPage()||this.setState({currentPage:this.state.currentPage+1})}},{key:"onChangePageSize",value:function(e){this.setState({pageSize:e})}},{key:"renderSingerOptions",value:function(){var e=h.music.map((function(e){return e.singer}));return(e=this.unique(e)).map((function(e,t){return n.a.createElement("option",{key:t,className:"wrapper__filter-option",value:e},e)}))}},{key:"renderGanreOptions",value:function(){var e=h.music.map((function(e){return e.ganre}));return(e=this.unique(e)).map((function(e,t){return n.a.createElement("option",{key:t,className:"wrapper__filter-option",value:e},e)}))}},{key:"renderYearOptions",value:function(){var e=h.music.map((function(e){return e.year}));return(e=(e=this.unique(e)).sort((function(e,t){return e-t}))).map((function(e,t){return n.a.createElement("option",{key:t,className:"wrapper__filter-option",value:e},e)}))}},{key:"renderMusic",value:function(){var e=this.state.list.music;return this.getFormattedMusicList(e).map((function(e,t){return n.a.createElement("tr",{key:t,className:"wrapper__table-row"},n.a.createElement("td",{className:"wrapper__table-cell"},n.a.createElement("p",{className:"wrapper__table-text"},t+1)),n.a.createElement("td",{className:"wrapper__table-cell"},n.a.createElement("p",{className:"wrapper__table-text"},e.singer)),n.a.createElement("td",{className:"wrapper__table-cell"},n.a.createElement("p",{className:"wrapper__table-text"},e.song)),n.a.createElement("td",{className:"wrapper__table-cell"},n.a.createElement("p",{className:"wrapper__table-text"},e.ganre)),n.a.createElement("td",{className:"wrapper__table-cell"},n.a.createElement("p",{className:"wrapper__table-text"},e.year)))}))}},{key:"renderPaginationSizes",value:function(){var e=this;return _.map((function(t,a){return n.a.createElement("div",{key:a,className:"wrapper__pagination-size",onClick:function(){return e.onChangePageSize(t)}},t)}))}},{key:"renderPagination",value:function(){return n.a.createElement("div",{className:"wrapper__pagination"},n.a.createElement("div",{className:"wrapper__pagination-container"},n.a.createElement("div",{className:"wrapper__pagination-prev",onClick:this.onPrevClick},"\u2190"),n.a.createElement("div",{className:"wrapper__pagination-current"},this.state.currentPage),n.a.createElement("div",{className:"wrapper__pagination-next",onClick:this.onNextClick},"\u2192")),n.a.createElement("div",{className:"wrapper__pagination-container"},this.renderPaginationSizes()))}},{key:"renderFilters",value:function(){return n.a.createElement("div",{className:"wrapper__filter"},n.a.createElement("label",{className:"wrapper__filter-label"},"Singer:",n.a.createElement("select",{className:"wrapper__filter-select",onChange:this.onFilterChangeBySinger},n.a.createElement("option",{className:"wrapper__filter-option",value:"All"},"All"),this.renderSingerOptions())),n.a.createElement("label",{className:"wrapper__filter-label"},"Ganre:",n.a.createElement("select",{className:"wrapper__filter-select",onChange:this.onFilterChangeByGanre},n.a.createElement("option",{className:"wrapper__filter-option",value:"All"},"All"),this.renderGanreOptions())),n.a.createElement("label",{className:"wrapper__filter-label"},"Year:",n.a.createElement("select",{className:"wrapper__filter-select",onChange:this.onFilterChangeByYear},n.a.createElement("option",{className:"wrapper__filter-option",value:"All"},"All"),this.renderYearOptions())))}},{key:"renderTableHead",value:function(){var e=this;return n.a.createElement("thead",{className:"wrapper__table-head"},n.a.createElement("tr",{className:"wrapper__table-row"},n.a.createElement("td",{className:"wrapper__table-cell"},n.a.createElement("p",{className:"wrapper__table-text"},"\u2116")),n.a.createElement("td",{className:"wrapper__table-cell",onClick:function(){return e.onSortingChange("singer")}},n.a.createElement("p",{className:"wrapper__table-text"},"Singer")),n.a.createElement("td",{className:"wrapper__table-cell",onClick:function(){return e.onSortingChange("song")}},n.a.createElement("p",{className:"wrapper__table-text"},"Song")),n.a.createElement("td",{className:"wrapper__table-cell",onClick:function(){return e.onSortingChange("ganre")}},n.a.createElement("p",{className:"wrapper__table-text"},"Ganre")),n.a.createElement("td",{className:"wrapper__table-cell",onClick:function(){return e.onSortingChange("year")}},n.a.createElement("p",{className:"wrapper__table-text"},"Year"))))}},{key:"renderTable",value:function(){return n.a.createElement("table",{className:"wrapper__table"},this.renderTableHead(),n.a.createElement("tbody",{className:"wrapper__table-body"},this.renderMusic()))}},{key:"render",value:function(){return n.a.createElement("div",{className:"wrapper"},n.a.createElement("div",{className:"wrapper__container"},this.renderTable(),this.renderFilters()),this.renderPagination())}}]),t}(r.Component),f=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"app"},n.a.createElement(y,null))}}]),t}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(n.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},2:function(e){e.exports=JSON.parse('{"music":[{"singer":"Slipknot","song":"All hope is gone","ganre":"Heavy metal","year":"2008"},{"singer":"Slipknot","song":"Wait and bleed","ganre":"Heavy metal","year":"1999"},{"singer":"Slipknot","song":"Spit it out","ganre":"Heavy metal","year":"1999"},{"singer":"Slipknot","song":"Left behind","ganre":"Heavy metal","year":"2001"},{"singer":"Slipknot","song":"Before I forget","ganre":"Heavy metal","year":"2005"},{"singer":"Lana Del Rey","song":"Young and beautiful","ganre":"Pop","year":"2013"},{"singer":"Lana Del Rey","song":"Born to die","ganre":"Pop","year":"2012"},{"singer":"Lana Del Rey","song":"Ultraviolence","ganre":"Pop","year":"2014"},{"singer":"Lana Del Rey","song":"Summertime Sadness","ganre":"Pop","year":"2012"},{"singer":"Lana Del Rey","song":"Video games","ganre":"Pop","year":"2011"}]}')}},[[11,1,2]]]);
//# sourceMappingURL=main.e5315ecc.chunk.js.map