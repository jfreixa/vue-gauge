<template>
  <div id="app">
    <div class="buttons">
      <button class="btn" :class="{active: isActive('week')}" v-stream:click="week$">Week</button>
      <button class="btn" :class="{active: isActive('month')}" v-stream:click="month$">Month</button>
      <button class="btn" :class="{active: isActive('quarter')}" v-stream:click="quarter$">Quarter</button>
      <button class="btn" :class="{active: isActive('year')}" v-stream:click="year$">Year</button>
    </div>
    <div class="gauges">
      <Gauge
              v-for="gauge in gauges"
              :completedSteps="gauge.completedSteps"
              :totalSteps="gauge.totalSteps"
              :name="gauge.name"
              :key="gauge.id"
      ></Gauge>
    </div>
  </div>
</template>

<script>
  import Gauge from './components/Gauge'
  import FakeGaugesProvider from './provider/FakeGaugesProvider'
  import { Observable } from 'rxjs/Observable'
  import 'rxjs/add/operator/mergeMap'
  import 'rxjs/add/operator/startWith'
  import 'rxjs/add/observable/merge'
  import 'rxjs/add/observable/fromEvent'

  export default {
    name: 'app',
    domStreams: ['week$', 'month$', 'quarter$', 'year$'],
    data () {
      return {
        active: 'week'
      }
    },
    subscriptions: function () {
      return {
        gauges: this.getGauges$()
      }
    },
    components: {
      Gauge
    },
    methods: {
      getGauges$ () {
        let week$ = this.createObservable(this.week$, 'week')
        let month$ = this.createObservable(this.month$, 'month')
        let quarter$ = this.createObservable(this.quarter$, 'quarter')
        let year$ = this.createObservable(this.year$, 'year')

        return Observable.merge(week$, month$, quarter$, year$)
      },
      createObservable (observable, type) {
        let observableTemp = this.isActive(type) ? observable.startWith('') : observable
        observableTemp = observableTemp.flatMap(FakeGaugesProvider[type])
        observableTemp.subscribe(() => {
          this.active = type
        })
        return observableTemp
      },
      isActive (type) {
        return this.active === type
      }
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  .gauges {
    display: flex;
    justify-content: center;
  }
  .btn {
    border: none;
    border-radius: 2px;
    display: inline-block;
    height: 36px;
    line-height: 36px;
    padding: 0 2rem;
    text-transform: uppercase;
    vertical-align: middle;
    -webkit-tap-highlight-color: transparent;
    text-decoration: none;
    color: #fff;
    background-color: #26a69a;
    text-align: center;
    letter-spacing: .5px;
    transition: .2s ease-out;
    cursor: pointer;
    outline: 0;
    box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 1px 5px 0 rgba(0,0,0,0.12), 0 3px 1px -2px rgba(0,0,0,0.2);
  }

  .btn.active {
    font-weight: 700;
    font-size: 1.1em;
  }
</style>
