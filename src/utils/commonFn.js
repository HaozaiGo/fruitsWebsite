export default {
  install(Vue, options) {
    Vue.prototype.computedDefectsSummary = function(detailData) {
      let defectsSummary = "";
      if (detailData.groundColorGreenAvg !== "0.00%") {
        defectsSummary +=
          detailData.groundColorGreenAvg + " Ground Color Green，";
      }
      if (detailData.groundColorTurningAvg !== "0.00%") {
        defectsSummary +=
          detailData.groundColorTurningAvg + " Ground Color Turning，";
      }
      if (detailData.groundColorYellowAvg !== "0.00%") {
        defectsSummary +=
          detailData.groundColorYellowAvg + " Ground Color Yellow，";
      }
      if (detailData.missizeAvg !== "0.00%") {
        defectsSummary += detailData.missizeAvg + " Missize，";
      }
      if (detailData.russetAvg !== "0.00%") {
        defectsSummary += detailData.russetAvg + " Russet，";
      }
      if (detailData.scarsAvg !== "0.00%") {
        defectsSummary += detailData.scarsAvg + " Scars，";
      }
      if (detailData.misshapenAvg !== "0.00%") {
        defectsSummary += detailData.misshapenAvg + " Misshapen，";
      }
      if (detailData.sunBurnAvg !== "0.00%") {
        defectsSummary += detailData.sunBurnAvg + " Sun Burn，";
      }
      if (detailData.lenticelBreakdownAvg !== "0.00%") {
        defectsSummary +=
          detailData.lenticelBreakdownAvg + " Lenticel Breakdown，";
      }
      if (detailData.mechanicalDamageAvg !== "0.00%") {
        defectsSummary +=
          detailData.mechanicalDamageAvg + " Mechanical Damage，";
      }
      if (detailData.woundsAvg !== "0.00%") {
        defectsSummary += detailData.woundsAvg + " Wounds，";
      }
      if (detailData.bruisesAvg !== "0.00%") {
        defectsSummary += detailData.bruisesAvg + " Bruises，";
      }
      if (detailData.shrivelingAvg !== "0.00%") {
        defectsSummary += detailData.shrivelingAvg + " Shriveling，";
      }
      if (detailData.decayAvg !== "0.00%") {
        defectsSummary += detailData.decayAvg + " Decay，";
      }
      if (detailData.moldAvg !== "0.00%") {
        defectsSummary += detailData.moldAvg + " Mold，";
      }
      if (detailData.bitterPitAvg !== "0.00%") {
        defectsSummary += detailData.bitterPitAvg + " Bitter Pit，";
      }
      if (detailData.corkAvg !== "0.00%") {
        defectsSummary += detailData.corkAvg + " Cork，";
      }
      if (detailData.scaldAvg !== "0.00%") {
        defectsSummary += detailData.scaldAvg + " Scald，";
      }
      if (detailData.insectDamageAvg !== "0.00%") {
        defectsSummary += detailData.insectDamageAvg + " Insect Damage，";
      }
      if (detailData.discolorationAvg !== "0.00%") {
        defectsSummary += detailData.discolorationAvg + " Discoloration，";
      }
      if (detailData.punctureAvg !== "0.00%") {
        defectsSummary += detailData.punctureAvg + " Puncture，";
      }
      if (detailData.freezingDamageAvg !== "0.00%") {
        defectsSummary += detailData.freezingDamageAvg + " Freezing Damage，";
      }
      if (detailData.hailDamageAvg !== "0.00%") {
        defectsSummary += detailData.hailDamageAvg + " Hail Damage，";
      }
      if (detailData.waterCoreAvg !== "0.00%") {
        defectsSummary += detailData.waterCoreAvg + " Water Core，";
      }
      if (detailData.internalBreakdownAvg !== "0.00%") {
        defectsSummary +=
          detailData.internalBreakdownAvg + " Internal Breakdown，";
      }
      if (detailData.crackingAvg !== "0.00%") {
        defectsSummary += detailData.crackingAvg + " Cracking，";
      }
      if (detailData.braeburnMarkAvg !== "0.00%") {
        defectsSummary += detailData.braeburnMarkAvg + " Braeburn Mark，";
      }
      if (detailData.coreRotAvg !== "0.00%") {
        defectsSummary += detailData.coreRotAvg + " Core Rot，";
      }
      if (detailData.firmRipeAvg !== "0.00%") {
        defectsSummary += detailData.firmRipeAvg + " Firm Ripe，";
      }
      if (detailData.internalBrowningAvg !== "0.00%") {
        defectsSummary +=
          detailData.internalBrowningAvg + " Internal Browning，";
      }
      if (detailData.bloomAvg !== "0.00%") {
        defectsSummary += detailData.bloomAvg + " Bloom，";
      }
      if (detailData.sensitiveAvg !== "0.00%") {
        defectsSummary += detailData.sensitiveAvg + " SensitiveAvg，";
      }
      if (detailData.shrivelingAvg !== "0.00%") {
        defectsSummary += detailData.shrivelingAvg + " ShrivelingAvg，";
      }
      if (detailData.softAvg !== "0.00%") {
        defectsSummary += detailData.softAvg + " softAvg，";
      }
      if (detailData.lackOfColorAvg !== "0.00%") {
        defectsSummary += detailData.lackOfColorAvg + " Lack of Color Avg，";
      }
      if (detailData.noStemAvg !== "0.00%") {
        defectsSummary += detailData.noStemAvg + " No Stem Avg，";
      }
      if (detailData.pittingAvg !== "0.00%") {
        defectsSummary += detailData.pittingAvg + " pittingAvg，";
      }
      if (detailData.dryStemAvg !== "0.00%") {
        defectsSummary += detailData.dryStemAvg + " Dry Stem Avg，";
      }
      if (detailData.flavorChangedAvg !== "0.00%") {
        defectsSummary += detailData.flavorChangedAvg + " Flavor Changed Avg，";
      }
      return defectsSummary;
    };
  },
};
