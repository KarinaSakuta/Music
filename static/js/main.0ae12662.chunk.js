(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{12:function(e,a,t){e.exports=t.p+"static/media/vinyl-record.9b63c65a.png"},14:function(e,a,t){e.exports=t(20)},19:function(e,a,t){},2:function(e){e.exports=JSON.parse('{"music":[{"singer":"Slipknot","song":"All hope is gone","ganre":"Heavy metal","year":"2008"},{"singer":"Slipknot","song":"Wait and bleed","ganre":"Heavy metal","year":"1999"},{"singer":"Slipknot","song":"Spit it out","ganre":"Heavy metal","year":"1999"},{"singer":"Slipknot","song":"Left behind","ganre":"Heavy metal","year":"2001"},{"singer":"Slipknot","song":"Before I forget","ganre":"Heavy metal","year":"2005"},{"singer":"Lana Del Rey","song":"Young and beautiful","ganre":"Pop","year":"2013"},{"singer":"Lana Del Rey","song":"Born to die","ganre":"Pop","year":"2012"},{"singer":"Lana Del Rey","song":"Ultraviolence","ganre":"Pop","year":"2014"},{"singer":"Lana Del Rey","song":"Summertime Sadness","ganre":"Pop","year":"2012"},{"singer":"Lana Del Rey","song":"Video games","ganre":"Pop","year":"2011"},{"singer":"Rammstein","song":"Seemann","ganre":"Hard rock","year":"1996"},{"singer":"Rammstein","song":"Sonne","ganre":"Hard rock","year":"2001"},{"singer":"Rammstein","song":"Mein Teil","ganre":"Hard rock","year":"2004"},{"singer":"Rammstein","song":"Amerika","ganre":"Hard rock","year":"2004"},{"singer":"Rammstein","song":"Benzin","ganre":"Hard rock","year":"2005"},{"singer":"Gorillaz","song":"Clint Eastwood","ganre":"Hip-hop","year":"2001"},{"singer":"Gorillaz","song":"Feel Good Inc","ganre":"Hip-hop","year":"2005"},{"singer":"Gorillaz","song":"Dare","ganre":"Hip-hop","year":"2005"},{"singer":"Gorillaz","song":"19-2000","ganre":"Hip-hop","year":"2001"},{"singer":"Gorillaz","song":"Kids With Guns","ganre":"Hip-hop","year":"2006"},{"singer":"Mac DeMarco","song":"My Kind of Woman","ganre":"Indie rock","year":"2013"},{"singer":"Mac DeMarco","song":"Ode to Viceroy","ganre":"Indie rock","year":"2012"},{"singer":"Mac DeMarco","song":"Dreamin","ganre":"Indie rock","year":"2013"},{"singer":"Mac DeMarco","song":"Only you","ganre":"Indie rock","year":"2014"},{"singer":"Mac DeMarco","song":"Chamber of reflection","ganre":"Indie rock","year":"2006"},{"singer":"Crystal Castles","song":"Crimewave","ganre":"Witch House","year":"2007"},{"singer":"Crystal Castles","song":"Air War","ganre":"Witch House","year":"2007"},{"singer":"Crystal Castles","song":"Vanished","ganre":"Witch House","year":"2008"},{"singer":"Crystal Castles","song":"Celestica","ganre":"Witch House","year":"2010"},{"singer":"Crystal Castles","song":"Baptism","ganre":"Witch House","year":"2010"}]}')},20:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),i=t(10),l=t.n(i),s=(t(19),t(4)),o=t(5),c=t(8),g=t(6),p=t(7),u=t(13),m=t(1),y=t(2),h=t(3),d=t.n(h),_=t(11),f=t.n(_),v=t(12),b=t.n(v),k=[5,10,20,30],w=function(e){function a(){var e;return Object(s.a)(this,a),(e=Object(c.a)(this,Object(g.a)(a).call(this))).state={filterBySinger:"All",filterByGanre:"All",filterByYear:"All",sortingParameter:null,list:y,currentPage:1,pageSize:10},e.onFilterChangeBySinger=e.onFilterChangeBySinger.bind(Object(m.a)(e)),e.onFilterChangeByGanre=e.onFilterChangeByGanre.bind(Object(m.a)(e)),e.onFilterChangeByYear=e.onFilterChangeByYear.bind(Object(m.a)(e)),e.onNextClick=e.onNextClick.bind(Object(m.a)(e)),e.onPrevClick=e.onPrevClick.bind(Object(m.a)(e)),e.onChangePageSize=e.onChangePageSize.bind(Object(m.a)(e)),e.renderTableHead=e.renderTableHead.bind(Object(m.a)(e)),e}return Object(p.a)(a,e),Object(o.a)(a,[{key:"getFilteredMusicList",value:function(e){var a=this;return"All"!==this.state.filterBySinger&&(e=e.filter((function(e){return e.singer===a.state.filterBySinger}))),"All"!==this.state.filterByGanre&&(e=e.filter((function(e){return e.ganre===a.state.filterByGanre}))),"All"!==this.state.filterByYear&&(e=e.filter((function(e){return e.year===a.state.filterByYear}))),e}},{key:"getSortedMusicList",value:function(e){var a=this;return"None"===this.state.sortingParameter?e:Object(u.a)(e).sort((function(e,t){return e[a.state.sortingParameter]>t[a.state.sortingParameter]?1:e[a.state.sortingParameter]<t[a.state.sortingParameter]?-1:0}))}},{key:"getPaginatedMusicList",value:function(e){var a=(this.state.currentPage-1)*this.state.pageSize,t=a+this.state.pageSize;return e.slice(a,t)}},{key:"getFormattedMusicList",value:function(e){var a=this.getFilteredMusicList(e),t=this.getSortedMusicList(a);return this.getPaginatedMusicList(t)}},{key:"getMaxPage",value:function(){return Math.ceil(this.state.list.music.length/this.state.pageSize)}},{key:"unique",value:function(e){var a=[],t=!0,r=!1,n=void 0;try{for(var i,l=e[Symbol.iterator]();!(t=(i=l.next()).done);t=!0){var s=i.value;a.includes(s)||a.push(s)}}catch(o){r=!0,n=o}finally{try{t||null==l.return||l.return()}finally{if(r)throw n}}return a}},{key:"onFilterChangeBySinger",value:function(e){this.setState({filterBySinger:e.target.value})}},{key:"onFilterChangeByGanre",value:function(e){this.setState({filterByGanre:e.target.value})}},{key:"onFilterChangeByYear",value:function(e){this.setState({filterByYear:e.target.value})}},{key:"onSortingChange",value:function(e){this.setState({sortingParameter:e})}},{key:"onPrevClick",value:function(){this.state.currentPage-1!==0&&this.setState({currentPage:this.state.currentPage-1})}},{key:"onNextClick",value:function(){this.state.currentPage+1>this.getMaxPage()||this.setState({currentPage:this.state.currentPage+1})}},{key:"onChangePageSize",value:function(e){this.setState({pageSize:e})}},{key:"renderSingerOptions",value:function(){var e=y.music.map((function(e){return e.singer}));return(e=this.unique(e)).map((function(e,a){return n.a.createElement("option",{key:a,className:"wrapper__filter-option",value:e},e)}))}},{key:"renderGanreOptions",value:function(){var e=y.music.map((function(e){return e.ganre}));return(e=this.unique(e)).map((function(e,a){return n.a.createElement("option",{key:a,className:"wrapper__filter-option",value:e},e)}))}},{key:"renderYearOptions",value:function(){var e=y.music.map((function(e){return e.year}));return(e=(e=this.unique(e)).sort((function(e,a){return e-a}))).map((function(e,a){return n.a.createElement("option",{key:a,className:"wrapper__filter-option",value:e},e)}))}},{key:"renderMusic",value:function(){var e=this.state.list.music;return this.getFormattedMusicList(e).map((function(e,a){return n.a.createElement("tr",{key:a,className:"wrapper__table-row"},n.a.createElement("td",{className:"wrapper__table-cell"},n.a.createElement("p",{className:"wrapper__table-text"},a+1)),n.a.createElement("td",{className:"wrapper__table-cell"},n.a.createElement("p",{className:"wrapper__table-text"},e.singer)),n.a.createElement("td",{className:"wrapper__table-cell"},n.a.createElement("p",{className:"wrapper__table-text"},e.song)),n.a.createElement("td",{className:"wrapper__table-cell"},n.a.createElement("p",{className:"wrapper__table-text"},e.ganre)),n.a.createElement("td",{className:"wrapper__table-cell"},n.a.createElement("p",{className:"wrapper__table-text"},e.year)))}))}},{key:"renderPaginationSizes",value:function(){var e=this;return k.map((function(a,t){return n.a.createElement("div",{key:t,className:"wrapper__pagination-size",onClick:function(){return e.onChangePageSize(a)}},a)}))}},{key:"renderPagination",value:function(){return n.a.createElement("div",{className:"wrapper__pagination"},n.a.createElement("div",{className:"wrapper__pagination-container"},n.a.createElement("div",{className:"wrapper__pagination-prev",onClick:this.onPrevClick},"\u2190"),n.a.createElement("div",{className:"wrapper__pagination-current"},this.state.currentPage),n.a.createElement("div",{className:"wrapper__pagination-next",onClick:this.onNextClick},"\u2192")),n.a.createElement("div",{className:"wrapper__pagination-container"},this.renderPaginationSizes()))}},{key:"renderFilters",value:function(){return n.a.createElement("div",{className:"wrapper__filter"},n.a.createElement("label",{className:"wrapper__filter-label"},"Singer:",n.a.createElement("select",{className:"wrapper__filter-select",onChange:this.onFilterChangeBySinger},n.a.createElement("option",{className:"wrapper__filter-option",value:"All"},"All"),this.renderSingerOptions())),n.a.createElement("label",{className:"wrapper__filter-label"},"Ganre:",n.a.createElement("select",{className:"wrapper__filter-select",onChange:this.onFilterChangeByGanre},n.a.createElement("option",{className:"wrapper__filter-option",value:"All"},"All"),this.renderGanreOptions())),n.a.createElement("label",{className:"wrapper__filter-label"},"Year:",n.a.createElement("select",{className:"wrapper__filter-select",onChange:this.onFilterChangeByYear},n.a.createElement("option",{className:"wrapper__filter-option",value:"All"},"All"),this.renderYearOptions())))}},{key:"renderTableHead",value:function(){var e=this,a=d()("wrapper__table-cell",{"wrapper__table-cell_active":"singer"===this.state.sortingParameter}),t=d()("wrapper__table-cell",{"wrapper__table-cell_active":"song"===this.state.sortingParameter}),r=d()("wrapper__table-cell",{"wrapper__table-cell_active":"ganre"===this.state.sortingParameter}),i=d()("wrapper__table-cell",{"wrapper__table-cell_active":"year"===this.state.sortingParameter});return n.a.createElement("thead",{className:"wrapper__table-head"},n.a.createElement("tr",{className:"wrapper__table-row"},n.a.createElement("td",{className:"wrapper__table-cell"},n.a.createElement("p",{className:"wrapper__table-text"},"\u2116")),n.a.createElement("td",{className:a,onClick:function(){return e.onSortingChange("singer")}},n.a.createElement("p",{className:"wrapper__table-text"},"Singer")),n.a.createElement("td",{className:t,onClick:function(){return e.onSortingChange("song")}},n.a.createElement("p",{className:"wrapper__table-text"},"Song")),n.a.createElement("td",{className:r,onClick:function(){return e.onSortingChange("ganre")}},n.a.createElement("p",{className:"wrapper__table-text"},"Ganre")),n.a.createElement("td",{className:i,onClick:function(){return e.onSortingChange("year")}},n.a.createElement("p",{className:"wrapper__table-text"},"Year"))))}},{key:"renderTable",value:function(){return n.a.createElement("table",{className:"wrapper__table"},this.renderTableHead(),n.a.createElement("tbody",{className:"wrapper__table-body"},this.renderMusic()))}},{key:"renderIcon",value:function(){return n.a.createElement("div",null,n.a.createElement(f.a,{url:b.a}))}},{key:"render",value:function(){return n.a.createElement("div",{className:"wrapper"},this.renderIcon(),n.a.createElement("div",{className:"wrapper__container"},this.renderTable(),this.renderFilters()),this.renderPagination())}}]),a}(r.Component),C=function(e){function a(){return Object(s.a)(this,a),Object(c.a)(this,Object(g.a)(a).apply(this,arguments))}return Object(p.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"app"},n.a.createElement(w,null))}}]),a}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(n.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[14,1,2]]]);
//# sourceMappingURL=main.0ae12662.chunk.js.map