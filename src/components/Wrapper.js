import React, {Component} from 'react';
import data from '../music.json';

const PAGINATION_SIZES = [5, 10, 20, 30];

export default class Wrapper extends Component {
  constructor() {
    super();

    this.state = {
      filterBySinger: 'All',
      filterByGanre: 'All',
      filterByYear: 'All',
      sortingParameter: 'None',
      list: data,
      currentPage: 1,
      pageSize: 5,
    };
  
    this.onFilterChangeBySinger = this.onFilterChangeBySinger.bind(this);
    this.onFilterChangeByGanre = this.onFilterChangeByGanre.bind(this);
    this.onFilterChangeByYear = this.onFilterChangeByYear.bind(this);
    this.onNextClick = this.onNextClick.bind(this);
    this.onPrevClick = this.onPrevClick.bind(this);
    this.onChangePageSize = this.onChangePageSize.bind(this);
  }

  getFilteredMusicList(musicList) {
    if (this.state.filterBySinger !== 'All') {
      musicList = musicList.filter(element => element.singer === this.state.filterBySinger);
    }

    if (this.state.filterByGanre !== 'All') {
      musicList = musicList.filter(element => element.ganre === this.state.filterByGanre);
    }

    if (this.state.filterByYear !== 'All') {
      musicList = musicList.filter(element => element.year === this.state.filterByYear);
    }

    return musicList;
  }

  getSortedMusicList(musicList) {
    if (this.state.sortingParameter === 'None') {
      return musicList;
    }

    return [...musicList].sort((element1, element2) => {
      if (element1[this.state.sortingParameter] > element2[this.state.sortingParameter]) {
        return 1;
      }

      if (element1[this.state.sortingParameter] < element2[this.state.sortingParameter]) {
        return -1;
      }

      return 0;
    });
  }

  getPaginatedMusicList(musicList) {
    let startIndex = (this.state.currentPage - 1) * this.state.pageSize;
    let endIndex = startIndex + this.state.pageSize;

    return musicList.slice(startIndex, endIndex);
  }

  getFormattedMusicList(musicList) {
    const filteredList = this.getFilteredMusicList(musicList);
    const sortedMusicList = this.getSortedMusicList(filteredList);
    const paginatedMusicList = this.getPaginatedMusicList(sortedMusicList);

    return paginatedMusicList;
  }

  getMaxPage() {
    return this.state.list.music.length / this.state.pageSize;
  }

  unique(arr) {
    let result = [];
  
    for (let str of arr) {
      if (!result.includes(str)) {
        result.push(str);
      }
    }
  
    return result;
  }

  onFilterChangeBySinger(event) {
    this.setState({ filterBySinger: event.target.value });
  }

  onFilterChangeByGanre(event) {
    this.setState({ filterByGanre: event.target.value });
  }

  onFilterChangeByYear(event) {
    this.setState({ filterByYear: event.target.value });
  }

  onSortingChange(sortingParameter) {
    this.setState({ sortingParameter });
  }

  onPrevClick() {
    if (this.state.currentPage - 1 === 0) {
      return;
    }

    this.setState({
      currentPage: this.state.currentPage - 1,
    });
  }

  onNextClick() {
    if (this.state.currentPage + 1 > this.getMaxPage()) {
      return;
    }

    this.setState({
      currentPage: this.state.currentPage + 1,
    });
  }

  onChangePageSize(pageSize) {
    this.setState({ pageSize });
  }

  renderSingerOptions() {
    let singerArray = data.music.map((singerElement) => {
      return singerElement.singer;
    });

    singerArray = this.unique(singerArray);

    return singerArray.map((singerElement, index) => {
      return (
        <option key={index} className="wrapper__filter-option" value={singerElement}>{singerElement}</option>
      );
    });
  }

  renderGanreOptions() {
    let ganreArray = data.music.map((ganreElement) => {
      return ganreElement.ganre;
    });

    ganreArray = this.unique(ganreArray);

    return ganreArray.map((ganreElement, index) => {
      return (
        <option key={index} className="wrapper__filter-option" value={ganreElement}>{ganreElement}</option>
      );
    });
  }

  renderYearOptions() {
    let yearArray = data.music.map((yearElement) => {
      return yearElement.year;
    });

    yearArray = this.unique(yearArray);

    yearArray = yearArray.sort(function(a, b) {
      return a - b;
    });

    return yearArray.map((yearElement, index) => {
      return (
        <option key={index} className="wrapper__filter-option" value={yearElement}>{yearElement}</option>
      );
    });
  }

  renderMusic() {
    let musicList = this.state.list.music;
    const formattedMusicList = this.getFormattedMusicList(musicList);
    
    return formattedMusicList.map((musicElement, indexOfMusicElement) => {
        return (
          <tr key={indexOfMusicElement} className="wrapper__table-row">
            <td className="wrapper__table-cell">
              <p className="wrapper__table-text">{indexOfMusicElement + 1}</p>
            </td>
            <td className="wrapper__table-cell">
              <p className="wrapper__table-text">{musicElement.singer}</p>
            </td>
            <td className="wrapper__table-cell">
              <p className="wrapper__table-text">{musicElement.song}</p>
            </td>
            <td className="wrapper__table-cell">
              <p className="wrapper__table-text">{musicElement.ganre}</p>
            </td>
            <td className="wrapper__table-cell">
              <p className="wrapper__table-text">{musicElement.year}</p>
            </td>
          </tr>
        );
    });
  }

  renderPaginationSizes() {
    return PAGINATION_SIZES.map((paginationSize, index) => {
      return (
        <div key={index} className="wrapper__pagination-size" onClick={() => this.onChangePageSize(paginationSize)}>{paginationSize}</div>
      );
    });
  }

  renderPagination() {
    return (
      <div className="wrapper__pagination">
          <div className="wrapper__pagination-container">
            <div className="wrapper__pagination-prev" onClick={this.onPrevClick}>←</div>
            <div className="wrapper__pagination-current">{this.state.currentPage}</div>
            <div className="wrapper__pagination-next" onClick={this.onNextClick}>→</div>
          </div>
          <div className="wrapper__pagination-container">
            {this.renderPaginationSizes()}
          </div>
      </div>
    );
  }

  renderFilters() {
    return (
      <div className="wrapper__filter">
        <label className="wrapper__filter-label">
          Singer:
          <select className="wrapper__filter-select" onChange={this.onFilterChangeBySinger}>
            <option className="wrapper__filter-option" value="All">All</option>
            {this.renderSingerOptions()}
          </select>
        </label>
        <label className="wrapper__filter-label">
          Ganre:
          <select className="wrapper__filter-select" onChange={this.onFilterChangeByGanre}>
            <option className="wrapper__filter-option" value="All">All</option>
            {this.renderGanreOptions()}
          </select>
        </label>
        <label className="wrapper__filter-label">
          Year:
          <select className="wrapper__filter-select" onChange={this.onFilterChangeByYear}>
            <option className="wrapper__filter-option" value="All">All</option>
            {this.renderYearOptions()}
          </select>
        </label>
      </div>
    );
  }

  renderTableHead() {
    return (
      <thead className="wrapper__table-head">
        <tr className="wrapper__table-row">
          <td className="wrapper__table-cell">
            <p className="wrapper__table-text">№</p>
          </td>
          <td className="wrapper__table-cell" onClick={() => this.onSortingChange('singer')}>
            <p className="wrapper__table-text">Singer</p>
          </td>
          <td className="wrapper__table-cell" onClick={() => this.onSortingChange('song')}>
            <p className="wrapper__table-text">Song</p>
          </td>
          <td className="wrapper__table-cell" onClick={() => this.onSortingChange('ganre')}>
            <p className="wrapper__table-text">Ganre</p>
          </td>
          <td className="wrapper__table-cell" onClick={() => this.onSortingChange('year')}>
            <p className="wrapper__table-text">Year</p>
          </td>
        </tr>
      </thead>
    );
  }

  renderTable() {
    return (
      <table className="wrapper__table">
        {this.renderTableHead()}
        <tbody className="wrapper__table-body">
          {this.renderMusic()}
        </tbody>   
      </table>
    );
  }

  render() {
    return (
      <div className="wrapper">
        <div className="wrapper__container">
          {this.renderTable()}
          {this.renderFilters()}
        </div>
        {this.renderPagination()}
      </div>
    );
  }
}
