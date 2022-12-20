import { test_elem_1, test_elem_2 } from '../data/test_data.js'

import { mixedElems, DiamondChart, WordShiftChart, BalanceChart, LegendChart } from "https://unpkg.com/allotaxonometer@1.1.9/index.js";

// Combining both systems in mixedElems class
const me_class = new mixedElems(test_elem_1, test_elem_2)
// const me = me_class.combElems()

// Calculate wordshift metric
const rtd = me_class.RTD(0.92)


// Create Data req for charts
const dat = me_class.Diamond(rtd)
const diamond_dat = dat.counts
const wordshift = me_class.wordShift(dat)
const balance_dat = me_class.balanceDat() 

// Plotting
DiamondChart(diamond_dat) 
WordShiftChart(wordshift, { height: 670 })
BalanceChart(balance_dat)
LegendChart(diamond_dat)
