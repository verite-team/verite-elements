import { Component, Element, Event, EventEmitter, State, getAssetPath, h } from '@stencil/core'

@Component({
  tag: 'date-selector',
  styleUrl: 'date-selector.css',
  assetsDirs: ['assets'],
  shadow: true,
})
export class DateSelector {
  @State() selectedMonth: string = ''
  @State() selectedDay: string = ''
  @State() selectedYear: string = ''

  @Element() el: HTMLElement

  @Event() valueChange: EventEmitter<{
    month: string
    day: string
    year: string
  }>

  months: string[] = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]

  days: number[] = Array.from({ length: 31 }, (_, i) => i + 1)
  years: number[] = Array.from({ length: 100 }, (_, i) => i + 1920)
  isDirty: boolean = true

  handleMonthChange(event) {
    this.selectedMonth = event.target.value
    this.emitValueChange()
  }

  handleDayChange(event) {
    this.selectedDay = event.target.value
    this.emitValueChange()
  }

  handleYearChange(event) {
    this.selectedYear = event.target.value
    this.emitValueChange()
  }

  emitValueChange() {
    // const selectedDate = `${this.selectedMonth} ${this.selectedDay}, ${this.selectedYear}`
    this.valueChange.emit({ month: this.selectedMonth, day: this.selectedDay, year: this.selectedYear })
  }

  connectedCallback() {
    console.log('[data-selector] connected:', getAssetPath('./assets/nerdherd.jpg'))
    // this is not the right place to get the height of the element
    console.log('connected::height:', this.el.getBoundingClientRect().height)
  }

  componentDidRender() {
    if (this.isDirty) {
      this.isDirty = false
      // this is the right place to get the height of the element
      console.log('didrender::height:', this.el.getBoundingClientRect().height)
    }
  }

  render() {
    return (
      <div>
        <img src={getAssetPath('./assets/nerdherd.jpg')} alt="Astronaut" width={100} height={100} />
        <div class="date-selector">
          <select onChange={event => this.handleMonthChange(event)}>
            <option value="" disabled selected>
              Select Month
            </option>
            {this.months.map(month => (
              <option value={month}>{month}</option>
            ))}
          </select>

          <select onChange={event => this.handleDayChange(event)}>
            <option value="" disabled selected>
              Select Day
            </option>
            {this.days.map(day => (
              <option value={day}>{day}</option>
            ))}
          </select>

          <select onChange={event => this.handleYearChange(event)}>
            <option value="" disabled selected>
              Select Year
            </option>
            {this.years.map(year => (
              <option value={year}>{year}</option>
            ))}
          </select>

          {/* {this.selectedMonth && this.selectedDay && this.selectedYear && (
          <p>
            Selected Date: {this.selectedMonth} {this.selectedDay}, {this.selectedYear}
          </p>
        )} */}
        </div>
      </div>
    )
  }
}
