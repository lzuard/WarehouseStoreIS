<template>
  <showcase-report-cell title="Популярные товары">
    <chart :chart-data="chartData"/>
  </showcase-report-cell>
</template>

<script>
import ShowcaseReportCell from '@/components/Showcase/showcase-report-cell'
import Chart from '@/components/Chart'

export default {
  name: 'ReportPopularProducts',
  components: {
    ShowcaseReportCell,
    Chart
  },
  data: () => {
    return {
      chartData: []
    }
  },
  created () {
    this.$api.reports.getPopularProducts()
      .then(data => {
        this.chartData = data.items.map(innerItem => {
          return { label: innerItem.productName, value: innerItem.count }
        })
      })
  }
}
</script>
