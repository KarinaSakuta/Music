import React, {Component} from 'react';
import data from '../music.json';

export default class Wrapper extends Component {
  constructor() {
    super();

    this.state = {
      filterBySinger: 'All',
      filterByGanre: 'All',
      filterByYear: 'All',
      list: data
    };

    this.renderMusic = this.renderMusic.bind(this);
    this.renderSingerOptions = this.renderSingerOptions.bind(this);
    this.renderGanreOptions = this.renderGanreOptions.bind(this);
    this.renderYearOptions = this.renderYearOptions.bind(this);
    this.onFilterChangeBySinger = this.onFilterChangeBySinger.bind(this);
    this.onFilterChangeByGanre = this.onFilterChangeByGanre.bind(this);
    this.onFilterChangeByYear = this.onFilterChangeByYear.bind(this);
    this.unique = this.unique.bind(this);
    this.filterMusic = this.filterMusic.bind(this);
  }

  renderMusic() {
    let sortedList = this.state.list.music;
    if (this.state.filterBySinger !== 'All') {
      sortedList = sortedList.filter(element => element.singer === this.state.filterBySinger);
    }

    if (this.state.filterByGanre !== 'All') {
      sortedList = sortedList.filter(element => element.ganre === this.state.filterByGanre);
    }

    if (this.state.filterByYear !== 'All') {
      sortedList = sortedList.filter(element => element.year === this.state.filterByYear);
    }

    return sortedList.map((musicElement, indexOfMusicElement) => {
        return (
          <tr className="wrapper__table-row">
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

  unique(arr) {
    let result = [];
  
    for (let str of arr) {
      if (!result.includes(str)) {
        result.push(str);
      }
    }
  
    return result;
  }
  
  
  renderSingerOptions() {
    let singerArray = data.music.map((singerElement) => {
      return singerElement.singer;
    });

    singerArray = this.unique(singerArray);

    return singerArray.map((singerElement) => {
      return (
        <option className="wrapper__filter-option" value={singerElement}>{singerElement}</option>
      );
    });
  }

  renderGanreOptions() {
    let ganreArray = data.music.map((ganreElement) => {
      return ganreElement.ganre;
    });

    ganreArray = this.unique(ganreArray);

    return ganreArray.map((ganreElement) => {
      return (
        <option className="wrapper__filter-option" value={ganreElement}>{ganreElement}</option>
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

    return yearArray.map((yearElement) => {
      return (
        <option className="wrapper__filter-option" value={yearElement}>{yearElement}</option>
      );
    });
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

  filterMusic() {

  }

  render() {
    return (
      <div className="wrapper">
        <table className="wrapper__table">
          <thead className="wrapper__table-head">
            <tr className="wrapper__table-row">
              <td className="wrapper__table-cell">
                <p className="wrapper__table-text">№</p>
              </td>
              <td className="wrapper__table-cell">
                <p className="wrapper__table-text">Singer</p>
              </td>
              <td className="wrapper__table-cell">
                <p className="wrapper__table-text">Song</p>
              </td>
              <td className="wrapper__table-cell">
                <p className="wrapper__table-text">Ganre</p>
              </td>
              <td className="wrapper__table-cell">
                <p className="wrapper__table-text">Year</p>
              </td>
            </tr>
          </thead>
          <tbody className="wrapper__table-body">
            {this.renderMusic()}
          </tbody>   
        </table>

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
      </div>
    );
  }
}
