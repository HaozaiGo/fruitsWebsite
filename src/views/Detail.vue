<template>
  <div
    class="detail"
    :style="{
      width: $store.state.showMenu === true ? '100%' : 'calc(100% - 181px)',
    }"
  >
    <!-- 内容 -->
    <!-- 表1 -->
    <div class="tableOne">
      <div class="header_table">
        <ul class="table_left">
          <li class="flag"><img src="../assets/detail/flag.png" alt="" /></li>
          <li class="toZip" @click="downloadXLSX()">
            <img src="../assets/detail/xlsx.png" alt="" />
          </li>
          <li class="toPdf" @click="toPdf()">
            <img src="../assets/detail/file-pdf.png" alt="" />
          </li>
          <li class="uploadData">
            {{ inspectionDate }}
          </li>
        </ul>
        <div class="table_right">
          <span>{{ createTime }}</span>
        </div>
      </div>
      <div class="table_container" id="pdfCentent">
        <ul class="oneRow">
          <template v-for="(item, index) in detailData">
            <li :key="index">
              {{ $t(item.classfiy) }}
            </li>
            <li :key="index + 't'">{{ item.value }}</li>
          </template>
        </ul>
      </div>
    </div>
    <!-- 表二 -->
    <div class="tableTwo">
      <!-- 相关报告 -->
      <!-- <div class="relatedReport">
        Related report
        <img src="../assets/detail/link.png" alt="" />
      </div> -->
      <el-tabs type="border-card" v-model="activeTab" @tab-click="tabChange">
        <el-tab-pane :label="$t('detail.ReportSummary')" name="reportSummary">
          <!-- 图标 -->
          <div class="charts" ref="chart"></div>
          <!-- 文字 -->
          <div class="reprot_content">
            <div class="reprot_Box">
              <dl>
                <template v-for="(item, index) in reprotData">
                  <dt :key="index">{{ item.title }}</dt>
                  <dd :key="index + 're'">{{ item.value }}</dd>
                </template>
              </dl>
            </div>
          </div>
          <div class="gapLine"></div>
        </el-tab-pane>
        <el-tab-pane :label="$t('detail.Notes')" name="notes">
          <div class="note_content">
            <dl>
              <template v-for="(item, index) in NoteData">
                <dt :key="index">{{ item.title }}</dt>
                <dd :key="index + 'no'">
                  {{ item.value }}
                </dd>
              </template>
            </dl>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="$t('detail.Thermograph')" name="thermograph">
          <div class="thermograph_content">
            <ul class="cardList">
              <li v-for="(item, index) in pdfList" :key="index">
                <div class="cardTopBox">
                  <div class="cardNum">
                    SERIAL<br />
                    NO. <span>{{ item.pdfName }}</span>
                  </div>
                  <div class="cardType">
                    <span>Min</span>
                    <span>Max</span>
                    <span>Avg</span>
                  </div>
                </div>
                <div class="cardBtn">
                  <!-- <el-button type="success"
                    ><img src="../assets/detail/download.png" alt="" />
                    File</el-button
                  > -->
                  <el-button type="success" @click="downLoadPdf(item.pdfLink)"
                    ><img src="../assets/detail/download.png" alt="" />
                    PDF</el-button
                  >
                </div>
              </li>
            </ul>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
    <!-- 表三 -->
    <div class="tableThree">
      <el-tabs type="border-card">
        <el-tab-pane :label="$t('detail.Grid')">
          <div class="grid_content">
            <!-- <div class="advancedORbasic">
              <el-radio-group v-model="radio1">
                <el-radio-button label="Advanced"></el-radio-button>
                <el-radio-button label="Basic"></el-radio-button>
              </el-radio-group>
            </div> -->
            <div class="toolOftable">
              <div class="changeEntries">
                {{ $t("home.show") }}
                <el-input-number
                  v-model="entriesNum"
                  controls-position="right"
                  @change="changeEntries"
                  :min="1"
                  :max="30"
                  size="small"
                ></el-input-number>
                {{ $t("home.entries") }}
              </div>
              <!-- <div class="searchEntries">
                Search：<el-input
                  v-model="searchEntries"
                  placeholder=""
                  size="small"
                ></el-input>
              </div> -->
            </div>
            <div class="tableDataList">
              <el-table :data="tableData" border stripe>
                <!-- :default-sort="{ prop: 'date', order: 'descending' }" -->
                <el-table-column
                  prop="pallet"
                  :label="$t('detail.Pallet')"
                  sortable
                  width="200"
                >
                </el-table-column>
                <el-table-column
                  prop="palletScore"
                  :label="$t('detail.PalletScore')"
                  sortable
                  width="130"
                  align="center"
                  v-if="showList.palletScore"
                >
                  <template scope="scope">
                    <el-tag
                      v-if="scope.row.palletScore === 'Fair'"
                      color="#dfd545"
                      >Fair</el-tag
                    >
                    <el-tag
                      v-if="scope.row.palletScore === 'Poor'"
                      color="#da742c"
                      >Poor</el-tag
                    >
                    <el-tag
                      v-if="scope.row.palletScore === 'Good'"
                      color="#25ae5f"
                      >Good</el-tag
                    >
                    <el-tag
                      v-if="scope.row.palletScore === 'Excellent'"
                      color="#1f6cad"
                      >Excellent</el-tag
                    >
                    <el-tag
                      v-if="scope.row.palletScore === 'Bad'"
                      color="#da222e"
                      >Bad</el-tag
                    >
                  </template>
                </el-table-column>
                <el-table-column
                  prop="openAppearance"
                  :label="$t('detail.OpenAppearance')"
                  sortable
                  width="180"
                  align="center"
                  v-if="showList.openAppearance"
                >
                  <template scope="scope3">
                    <el-tag
                      v-if="scope3.row.openAppearance === 'Fair'"
                      color="#dfd545"
                      >Fair</el-tag
                    >
                    <el-tag
                      v-if="scope3.row.openAppearance === 'Poor'"
                      color="#da742c"
                      >Poor</el-tag
                    >
                    <el-tag
                      v-if="scope3.row.openAppearance === 'Good'"
                      color="#25ae5f"
                      >Good</el-tag
                    >
                    <el-tag
                      v-if="scope3.row.openAppearance === 'Excellent'"
                      color="#1f6cad"
                      >Excellent</el-tag
                    >
                    <el-tag
                      v-if="scope3.row.openAppearance === 'Bad'"
                      color="#da222e"
                      >Bad</el-tag
                    >
                  </template>
                </el-table-column>
                <el-table-column
                  prop="palletGallery"
                  :label="$t('detail.PalletGallery')"
                  sortable
                  width="140"
                  align="center"
                  v-if="showList.palletGallery"
                >
                </el-table-column>
                <el-table-column
                  prop="sampleScore"
                  :label="$t('detail.SampleScore')"
                  sortable
                  width="140"
                  align="center"
                  v-if="showList.sampleScore"
                >
                  <template scope="scope2">
                    <el-tag
                      v-if="scope2.row.sampleScore === 'Fair'"
                      color="#dfd545"
                      >Fair</el-tag
                    >
                    <el-tag
                      v-if="scope2.row.sampleScore === 'Poor'"
                      color="#da742c"
                      >Poor</el-tag
                    >
                    <el-tag
                      v-if="scope2.row.sampleScore === 'Good'"
                      color="#25ae5f"
                      >Good</el-tag
                    >
                    <el-tag
                      v-if="scope2.row.sampleScore === 'Excellent'"
                      color="#1f6cad"
                      >Excellent</el-tag
                    >
                    <el-tag
                      v-if="scope2.row.sampleScore === 'Bad'"
                      color="#da222e"
                      >Bad</el-tag
                    >
                  </template>
                </el-table-column>
                <el-table-column
                  prop="sampleGallery"
                  :label="$t('detail.SampleGallery')"
                  sortable
                  width="160"
                  align="center"
                  v-if="showList.sampleGallery"
                >
                </el-table-column>
                <el-table-column
                  prop="finalScore"
                  :label="$t('detail.FinalScore')"
                  sortable
                  width="130"
                  align="center"
                  v-if="showList.finalScore"
                >
                </el-table-column>
                <el-table-column
                  prop="mainDefect"
                  :label="$t('detail.MainDefect')"
                  sortable
                  width="150"
                  align="center"
                  v-if="showList.mainDefect"
                >
                </el-table-column>
                <el-table-column
                  prop="tempAvg"
                  :label="$t('detail.TempAvg')"
                  sortable
                  width="120"
                  align="center"
                  v-if="showList.tempAvg"
                >
                </el-table-column>
                <el-table-column
                  prop="netWeightAvg"
                  :label="$t('detail.NetWeightAvg')"
                  sortable
                  width="160"
                  align="center"
                  v-if="showList.netWeightAvg"
                >
                </el-table-column>
                <el-table-column
                  prop="casesSample"
                  :label="$t('detail.CasesSample')"
                  sortable
                  width="150"
                  align="center"
                  v-if="showList.casesSample"
                >
                </el-table-column>
                <el-table-column
                  prop="sampleWeight"
                  :label="$t('detail.SampleWeight')"
                  sortable
                  width="160"
                  align="center"
                  v-if="showList.sampleWeight"
                >
                </el-table-column>
                <el-table-column
                  prop="samplesNumber"
                  :label="$t('detail.SamplesNumber')"
                  sortable
                  width="170"
                  align="center"
                  v-if="showList.samplesNumber"
                >
                </el-table-column>
                <el-table-column
                  prop="piecesWeight"
                  :label="$t('detail.PiecesWeight')"
                  sortable
                  width="170"
                  align="center"
                  v-if="showList.piecesWeight"
                >
                </el-table-column>
                <el-table-column
                  prop="sampleSize"
                  :label="$t('detail.SampleSize')"
                  sortable
                  width="130"
                  align="center"
                  v-if="showList.sampleSize"
                >
                </el-table-column>
                <el-table-column
                  prop="grower"
                  :label="$t('detail.Grower')"
                  sortable
                  width="100"
                  align="center"
                  v-if="showList.grower"
                >
                </el-table-column>
                <el-table-column
                  prop="block"
                  :label="$t('detail.Block')"
                  sortable
                  width="90"
                  align="center"
                  v-if="showList.block"
                >
                </el-table-column>
                <el-table-column
                  prop="variety"
                  :label="$t('detail.Variety')"
                  sortable
                  width="100"
                  align="center"
                  v-if="showList.variety"
                >
                </el-table-column>
                <el-table-column
                  prop="varietyCode"
                  :label="$t('detail.VarietyCode')"
                  sortable
                  width="140"
                  align="center"
                  v-if="showList.varietyCode"
                >
                </el-table-column>
                <el-table-column
                  prop="packingDate"
                  :label="$t('detail.PackingDate')"
                  sortable
                  width="140"
                  align="center"
                  v-if="showList.packingDate"
                >
                </el-table-column>
                <el-table-column
                  prop="lote"
                  :label="$t('detail.Lote')"
                  sortable
                  width="120"
                  align="center"
                  v-if="showList.lote"
                >
                </el-table-column>
                <el-table-column
                  prop="label"
                  :label="$t('detail.Label')"
                  sortable
                  width="90"
                  align="center"
                  v-if="showList.label"
                >
                </el-table-column>
                <el-table-column
                  prop="temperature"
                  :label="$t('detail.Temperature')"
                  sortable
                  width="140"
                  align="center"
                  v-if="showList.temperature"
                >
                </el-table-column>

                <el-table-column
                  prop="brix"
                  :label="$t('detail.Brix')"
                  sortable
                  width="80"
                  align="center"
                  v-if="showList.brix"
                >
                </el-table-column>
                <el-table-column
                  prop="baxloAvg"
                  :label="$t('detail.BaxloAvg')"
                  sortable
                  width="120"
                  align="center"
                  v-if="showList.baxloAvg"
                >
                </el-table-column>
                <el-table-column
                  prop="o2"
                  :label="$t('detail.O2')"
                  sortable
                  width="70"
                  align="center"
                  v-if="showList.o2"
                >
                </el-table-column>
                <el-table-column
                  prop="co2"
                  :label="$t('detail.CO2')"
                  sortable
                  width="80"
                  align="center"
                  v-if="showList.co2"
                >
                </el-table-column>
                <el-table-column
                  prop="foreignBody"
                  :label="$t('detail.ForeignBody')"
                  sortable
                  width="140"
                  align="center"
                  v-if="showList.foreignBody"
                >
                </el-table-column>
                <el-table-column
                  prop="contamination"
                  :label="$t('detail.Contamination')"
                  sortable
                  width="150"
                  align="center"
                  v-if="showList.contamination"
                >
                </el-table-column>
                <el-table-column
                  prop="size"
                  :label="$t('detail.Size')"
                  sortable
                  width="80"
                  align="center"
                  v-if="showList.size"
                >
                </el-table-column>
           
                <el-table-column
                  prop="bloom"
                  :label="$t('detail.Bloom')"
                  sortable
                  width="100"
                  align="center"
                  v-if="showList.bloom"
                >
                </el-table-column>
                <el-table-column
                  prop="rsnbasfr"
                  :label="$t('detail.RSNBASFR')"
                  sortable
                  width="140"
                  align="center"
                  v-if="showList.rsnbasfr"
                >
                </el-table-column>
                <el-table-column
                  :label="$t('detail.Misshapen')"
                  sortable
                  width="130"
                  align="center"
                  v-if="showList.misshapen"
                >
                  <template slot-scope="scope">
                    <span>{{ scope.row.misshapen }}</span>
                  </template>
                </el-table-column>
                <el-table-column
                  :label="$t('detail.Oversize')"
                  sortable
                  width="110"
                  align="center"
                  v-if="showList.oversize"
                >
                  <template slot-scope="scope">
                    <span>{{ scope.row.oversize }}</span>
                  </template>
                </el-table-column>
                <el-table-column
                  :label="$t('detail.Undersize')"
                  sortable
                  width="120"
                  align="center"
                  v-if="showList.underSize"
                >
                  <template slot-scope="scope">
                    <span>{{ scope.row.underSize }}</span>
                  </template>
                </el-table-column>
                <el-table-column
                  :label="$t('detail.LackOfColor')"
                  sortable
                  width="140"
                  align="center"
                  v-if="showList.lackOfColor"
                >
                  <template slot-scope="scope">
                    <span>{{ scope.row.lackOfColor }}</span>
                  </template>
                </el-table-column>
                <!-- 新增 -->
                <el-table-column
                  :label="$t('detail.Pitting')"
                  sortable
                  width="90"
                  align="center"
                  v-if="showList.pitting"
                >
                  <template slot-scope="scope">
                    <span>{{ scope.row.pitting }}</span>
                  </template>
                </el-table-column>
                <el-table-column
                  :label="$t('detail.DryStem')"
                  sortable
                  width="110"
                  align="center"
                  v-if="showList.dryStem"
                >
                  <template slot-scope="scope">
                    <span>{{ scope.row.dryStem }}</span>
                  </template>
                </el-table-column>
                <el-table-column
                  :label="$t('detail.FlavorChanged')"
                  sortable
                  width="150"
                  align="center"
                  v-if="showList.flavorChanged"
                >
                  <template slot-scope="scope">
                    <span>{{ scope.row.flavorChanged }}</span>
                  </template>
                </el-table-column>
                <el-table-column
                  :label="$t('detail.freezingDamage')"
                  sortable
                  width="160"
                  align="center"
                  v-if="showList.freezingDamage"
                >
                  <template slot-scope="scope">
                    <span>{{ scope.row.freezingDamage }}</span>
                  </template>
                </el-table-column>
                <el-table-column
                  :label="$t('detail.russet')"
                  sortable
                  width="80"
                  align="center"
                  v-if="showList.russet"
                >
                  <template slot-scope="scope">
                    <span>{{ scope.row.russet }}</span>
                  </template>
                </el-table-column>
                <el-table-column
                  :label="$t('detail.scars')"
                  sortable
                  width="80"
                  align="center"
                  v-if="showList.scars"
                >
                  <template slot-scope="scope">
                    <span>{{ scope.row.scars }}</span>
                  </template>
                </el-table-column>

                <!-- 结束 -->
                <el-table-column
                  :label="$t('detail.Cracking')"
                  sortable
                  width="100"
                  align="center"
                  v-if="showList.cracking"
                >
                  <template slot-scope="scope">
                    <span>{{ scope.row.cracking }}</span>
                  </template>
                </el-table-column>
                <el-table-column
                  :label="$t('detail.Decay')"
                  sortable
                  width="90"
                  align="center"
                  v-if="showList.decay"
                >
                  <template slot-scope="scope">
                    <span>{{ scope.row.decay }}</span>
                  </template>
                </el-table-column>
                <el-table-column
                  :label="$t('detail.Bruises')"
                  sortable
                  width="90"
                  align="center"
                  v-if="showList.bruises"
                >
                  <template slot-scope="scope">
                    <span>{{ scope.row.bruises }}</span>
                  </template>
                </el-table-column>
                <el-table-column
                  :label="$t('detail.DecayIncidence')"
                  sortable
                  width="160"
                  align="center"
                  v-if="showList.decayIncidence"
                >
                  <template slot-scope="scope">
                    <span>{{ scope.row.decayIncidence }}</span>
                  </template>
                </el-table-column>
                <el-table-column
                  :label="$t('detail.Mold')"
                  sortable
                  width="90"
                  align="center"
                  v-if="showList.mold"
                >
                  <template slot-scope="scope">
                    <span>{{ scope.row.mold }}</span>
                  </template>
                </el-table-column>
                <el-table-column
                  :label="$t('detail.MoldIncidence')"
                  sortable
                  width="160"
                  align="center"
                  v-if="showList.moldIncidence"
                >
                  <template slot-scope="scope">
                    <span>{{ scope.row.moldIncidence }}</span>
                  </template>
                </el-table-column>
                <el-table-column
                  prop="moldType"
                  :label="$t('detail.MoldType')"
                  sortable
                  width="120"
                  align="center"
                  v-if="showList.moldType"
                >
                </el-table-column>
                <el-table-column
                  prop="soft"
                  :label="$t('detail.Soft')"
                  sortable
                  width="80"
                  align="center"
                  v-if="showList.soft"
                >
                  <template slot-scope="scope">
                    <span>{{ scope.row.soft }}</span>
                  </template>
                </el-table-column>
                <el-table-column
                  prop="noStem"
                  :label="$t('detail.noStem')"
                  sortable
                  width="100"
                  align="center"
                  v-if="showList.noStem"
                >
                  <template slot-scope="scope">
                    <span>{{ scope.row.noStem }}</span>
                  </template>
                </el-table-column>

                <el-table-column
                  prop="sensitive"
                  :label="$t('detail.Sensitive')"
                  sortable
                  width="110"
                  align="center"
                  v-if="showList.sensitive"
                >
                  <template slot-scope="scope">
                    <span>{{ scope.row.sensitive }}</span>
                  </template>
                </el-table-column>
                <el-table-column
                  prop="shriveling"
                  :label="$t('detail.Shriveling')"
                  sortable
                  width="120"
                  align="center"
                  v-if="showList.shriveling"
                >
                  <template slot-scope="scope">
                    <span>{{ scope.row.shriveling }}</span>
                  </template>
                </el-table-column>
                <el-table-column
                  prop="pedicelarSunken"
                  :label="$t('detail.PedicelarSunken')"
                  sortable
                  width="170"
                  align="center"
                  v-if="showList.pedicelarSunken"
                >
                  <template slot-scope="scope">
                    <span>{{ scope.row.pedicelarSunken }}</span>
                  </template>
                </el-table-column>
                <el-table-column
                  prop="bswscr"
                  :label="$t('detail.BSWSCR')"
                  sortable
                  width="120"
                  align="center"
                  v-if="showList.bswscr"
                >
                  <template slot-scope="scope">
                    <span>{{ scope.row.bswscr }}</span>
                  </template>
                </el-table-column>
                <el-table-column
                  prop="so2Damage"
                  :label="$t('detail.SO2Damage')"
                  sortable
                  width="140"
                  align="center"
                  v-if="showList.so2Damage"
                >
                  <template slot-scope="scope">
                    <span>{{ scope.row.so2Damage }}</span>
                  </template>
                </el-table-column>
                <el-table-column
                  prop="insectPresence"
                  :label="$t('detail.InsectPresence')"
                  sortable
                  width="160"
                  align="center"
                  v-if="showList.insectPresence"
                >
                  <template slot-scope="scope">
                    <span>{{ scope.row.insectPresence }}</span>
                  </template>
                </el-table-column>
                <el-table-column
                  :label="$t('detail.SumOfQualityDefects')"
                  sortable
                  width="210"
                  align="center"
                  v-if="showList.sumOfQualityDefects"
                >
                  <template slot-scope="scope">
                    <span>{{ scope.row.sumOfQualityDefects }}</span>
                  </template>
                </el-table-column>
                <el-table-column
                  :label="$t('detail.SumOfConditionDefects')"
                  sortable
                  width="230"
                  align="center"
                  v-if="showList.sumOfConditionDefects"
                >
                  <template slot-scope="scope">
                    <span>{{ scope.row.sumOfConditionDefects }}</span>
                  </template>
                </el-table-column>
                <el-table-column
                  :label="$t('detail.SumOfTotalDefects')"
                  sortable
                  width="200"
                  align="center"
                  v-if="showList.sumOfTotalDefects"
                >
                  <template slot-scope="scope">
                    <span>{{ scope.row.sumOfTotalDefects }}</span>
                  </template>
                </el-table-column>
              </el-table>
            </div>
            <!-- 显示数量 -->
            <div class="entriesShow">
              {{ $t("home.showing") }} {{ (currentPage - 1) * entriesNum + 1 }}
              {{ $t("home.to") }} {{ currentPage * entriesNum }}
              {{ $t("home.of") }}
              {{ totalNum }}
              {{ $t("home.sumEntries") }}
            </div>
            <!-- 分页 -->
            <div class="table3Page">
              <el-pagination
                background
                layout="prev, pager, next"
                :total="totalNum"
                :page-size="entriesNum"
                :current-page="currentPage"
                @current-change="currentChange"
              >
              </el-pagination>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="$t('detail.List')"
          ><el-collapse v-model="activeList">
            <el-collapse-item
              v-for="(item, index) in allTableData"
              :key="index"
              :title="'Pallet：' + item.pallet"
              :name="index"
            >
              <el-tabs type="border-card">
                <el-tab-pane label="Overview">
                  <ul class="overview">
                    <li>
                      ·
                      <template>
                        <el-tag
                          v-if="item.palletScore === 'Fair'"
                          color="#dfd545"
                          >Fair</el-tag
                        >
                        <el-tag
                          v-if="item.palletScore === 'Poor'"
                          color="#da742c"
                          >Poor</el-tag
                        >
                        <el-tag
                          v-if="item.palletScore === 'Good'"
                          color="#25ae5f"
                          >Good</el-tag
                        >
                        <el-tag
                          v-if="item.palletScore === 'Excellent'"
                          color="#1f6cad"
                          >Excellent</el-tag
                        >
                        <el-tag
                          v-if="item.palletScore === 'Bad'"
                          color="#da222e"
                          >Bad</el-tag
                        >
                      </template>
                    </li>
                    <li>
                      Final Score：<span>{{ item.finalScore }}</span>
                    </li>
                    <li>
                      Main Defect：<span>{{ item.mainDefect }}</span>
                    </li>
                    <li>
                      Temp Avg: <span>{{ item.tempAvg }}</span>
                    </li>
                    <li>
                      Net Weight Avg: <span>{{ item.netWeightAvg }}</span>
                    </li>
                  </ul>
                </el-tab-pane>
                <el-tab-pane label="General">
                  <div class="generalList">
                    <ul class="general1">
                      <li>
                        Cases Sample：<span>{{ item.casesSample }}</span>
                      </li>
                      <li>
                        Sample Weight：<span>{{ item.sampleWeight }}</span>
                      </li>
                      <li>
                        Samples Number：<span>{{ item.samplesNumber }}</span>
                      </li>
                      <li>
                        20 Pieces Weight：<span>{{ item.piecesWeight }}</span>
                      </li>
                      <li>
                        Sample Size：<span>{{ item.sampleSize }}</span>
                      </li>
                    </ul>
                    <ul class="general2">
                      <li>
                        Grower：<span>{{ item.grower }}</span>
                      </li>
                      <li>
                        Block：<span>{{ item.block }}</span>
                      </li>
                      <li>
                        Variety：<span>{{ item.variety }}</span>
                      </li>
                      <li>
                        Variety Code：<span>{{ item.varietyCode }}</span>
                      </li>
                      <li>
                        Packing Date：<span>{{ item.packingDate }}</span>
                      </li>
                    </ul>
                    <ul class="general3">
                      <li>
                        Packing Date：<span>{{ item.packingDate }}</span>
                      </li>
                      <li>
                        Lote：<span>{{ item.lote }}</span>
                      </li>
                      <li>
                        Label：<span>{{ item.label }}</span>
                      </li>
                    </ul>
                  </div>
                </el-tab-pane>
                <el-tab-pane label="Other"
                  ><div class="otherList">
                    <ul class="other1">
                      <li>
                        Temperature：<span>{{ item.temperature }}</span>
                      </li>
                      <li>
                        Net Weight Avg：<span>{{ item.netWeightAvg }}</span>
                      </li>
                      <li>
                        Brix：<span>{{ item.brix }}</span>
                      </li>
                      <li>
                        Baxlo Avg：<span>{{ item.baxloAvg }}</span>
                      </li>
                      <li>
                        O2：<span>{{ item.o2 }}</span>
                      </li>
                    </ul>
                    <ul class="other2">
                      <li>
                        CO2：<span>{{ item.co2 }}</span>
                      </li>
                    </ul>
                  </div></el-tab-pane
                >
                <el-tab-pane label="Quality">
                  <div class="qualityList">
                    <ul>
                      <li>
                        Foreign Body：<span>{{ item.foreignBody }}</span>
                      </li>
                      <li>
                        Contamination：<span>{{ item.contamination }}</span>
                      </li>
                      <li>
                        Size：<span>{{ item.size }}</span>
                      </li>
                      <li>
                        Bloom：<span>{{ item.bloom }}</span>
                      </li>
                    </ul>
                    <ul>
                      <li>
                        RS NB AS FR：<span>{{ item.rsnbasfr }}</span>
                      </li>
                      <li>
                        Misshapen：<span>{{ item.misshapen }}</span>
                      </li>
                      <li>
                        Oversize：<span>{{ item.oversize }}</span>
                      </li>
                      <li>
                        Undersize：<span>{{ item.undersize }}</span>
                      </li>
                      <li>
                        Lack of Color：<span>{{ item.lackOfColor }}</span>
                      </li>
                    </ul>
                  </div>
                </el-tab-pane>
                <el-tab-pane label="Condition"
                  ><div class="conditionList">
                    <ul>
                      <li>
                        Decay：<span>{{ item.decay }}</span>
                      </li>
                      <li>
                        Decay Incidence：<span>{{ item.decayIncidence }}</span>
                      </li>
                      <li>
                        Mold：<span>{{ item.mold }}</span>
                      </li>
                      <li>
                        Mold Incidence：<span>{{ item.moldIncidence }}</span>
                      </li>
                      <li>
                        Mold Type：<span>{{ item.moldType }}</span>
                      </li>
                    </ul>
                    <ul>
                      <li>
                        Soft：<span>{{ item.soft }}</span>
                      </li>
                      <li>
                        Sensitive：<span>{{ item.sensitive }}</span>
                      </li>
                      <li>
                        Shriveling：<span>{{ item.shriveling }}</span>
                      </li>
                      <li>
                        Pedicelar Sunken：<span>{{
                          item.pedicelarSunken
                        }}</span>
                      </li>
                      <li>
                        BS WS CR：<span>{{ item.bswscr }}</span>
                      </li>
                    </ul>
                    <ul v-if="item.so2Damage != 0">
                      <li>
                        SO2 Damage：<span>{{ item.so2Damage }}</span>
                      </li>
                      <li>
                        Insect Presence：<span>{{ item.insectPresence }}</span>
                      </li>
                    </ul>
                  </div></el-tab-pane
                >
                <el-tab-pane label="Totals"
                  ><div class="totalList">
                    <ul>
                      <li>
                        Sum of Quality Defects：<span>{{
                          item.sumOfQualityDefects
                        }}</span>
                      </li>
                      <li>
                        Sum of Condition Defects：<span>{{
                          item.sumOfConditionDefects
                        }}</span>
                      </li>
                      <li>
                        Sum of Total Defects：<span>{{
                          item.sumOfTotalDefects
                        }}</span>
                      </li>
                    </ul>
                  </div></el-tab-pane
                >
              </el-tabs>
            </el-collapse-item>
          </el-collapse>
        </el-tab-pane>
      </el-tabs>
    </div>
    <!-- 表四 -->
    <div class="imageCarousel">
      <div class="imageHeader">{{ $t("detail.Images") }}</div>
      <div class="carouselImg">
        <div class="imgList" v-if="imgListShow">
          <VueSlickCarousel ref="carousel" v-bind="carouselSettings">
            <div
              class="imgBox"
              v-for="(item, index) in imgList"
              :key="index"
              @click="showImg(index)"
            >
              <img :src="item.imgSrc" draggable="false" alt="" />
            </div>
          </VueSlickCarousel>
        </div>
      </div>
    </div>

    <!-- 图片查看器 -->
    <div
      class="images"
      v-viewer="{
        movable: true,
        title: false,
        fullscreen: false,
        initialViewIndex: 0,
      }"
    >
      <img
        v-for="(item, index) in imgList"
        :key="index"
        :src="item.imgSrc"
        alt=""
      />
    </div>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
import moment from "moment";

let Echarts = require("echarts/lib/echarts");
export default {
  props: {
    getNetWeightsAvg: {
      type: Function,
    },
    getMainDefects: {
      type: Function,
    },
  },
  components: { VueSlickCarousel },
  data() {
    return {
      // hasDetailData: false,
      // 表一的数据（网络请求）
      inspectionDate: "",
      createTime: "",
      detailData: [
        {
          classfiy: "home.Lot",
          value: "",
          valueKey: "lot",
        },
        {
          classfiy: "home.Company",
          value: "",
          valueKey: "company",
        },
        {
          classfiy: "home.ShipperConsignee",
          value: "",
          valueKey: "shipperConsignee",
        },
        {
          classfiy: "home.Location",
          value: "",
          valueKey: "location",
        },
        { classfiy: "home.Product", value: "", valueKey: "product" },
        {
          classfiy: "home.Package",
          value: "",
          valueKey: "package",
        },
        {
          classfiy: "home.ProductType",
          value: "",
          valueKey: "productType",
        },
        {
          classfiy: "home.Reference",
          value: "",
          valueKey: "reference",
        },
        {
          classfiy: "home.CarrierType",
          value: "",
          valueKey: "carrierType",
        },
        { classfiy: "home.Carrier", value: "", valueKey: "carrier" },
        { classfiy: "home.Vessel", value: "", valueKey: "vessel" },
        {
          classfiy: "home.Warehouse",
          value: "",
          valueKey: "warehouse",
        },
        {
          classfiy: "home.ArrivalDate",
          value: "",
          valueKey: "arrivalDate",
        },
        {
          classfiy: "home.WarehouseDate",
          value: "",
          valueKey: "warehouseDate",
        },
        { classfiy: "home.Cases", value: "", valueKey: "cases" },
        { classfiy: "home.Country", value: "", valueKey: "country" },
        { classfiy: "home.Fumigation", value: "", valueKey: "fumigation" },
        {
          classfiy: "home.InspectionType",
          value: "Normal Inspection",
          valueKey: "inspectionType",
        },
        { classfiy: "home.AtmosphereType", value: "", valueKey: "" },
        { classfiy: "home.Inspector", value: "", valueKey: "inspection" },
        { classfiy: "home.Organic", value: "1", valueKey: "organic" },
        { classfiy: "", value: "" },
        { classfiy: "", value: "" },
        { classfiy: "", value: "" },
        { classfiy: "", value: "" },
      ],

      // 笔记数据（网络请求）
      NoteData: [
        { title: "Typing By:", value: "" },
        {
          title: "Temperature Recorder:",
          value: "",
        },
        {
          title: "Package:",
          value: "",
        },
        {
          title: "Traceability:",
          value: "",
        },
        {
          title: "Temperature:",
          value: "",
        },
        {
          title: "Quality :",
          value: "",
        },
        {
          title: "Inspector Notes:",
          value: "",
        },
      ],
      radio1: "Advanced",
      entriesNum: 25,
      currentPage: 1,
      totalNum: 0,
      searchEntries: "",
      containerDetail: {},
      activeTab: "reportSummary",
      thermographLoad: false,
      pdfList: [],
      // 水果数据（网络请求） 一页
      firstload: true,
      tableData: [],
      allTableData: [],
      activeList: ["1"],
      // 轮播图设置（不动）
      carouselSettings: {
        lazyLoad: "ondemand",
        dots: true,
        focusOnSelect: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        touchThreshold: 5,
        draggable: false,
        accessibility: false,
        adaptiveHeight: true,
      },
      // 图片列表
      imgList: [],
      imgListShow: false,
      showList: {},
    };
  },
  computed: {
    //  饼状图数据（网络请求）
    reprotData() {
      return [
        {
          title: "Net Weight Avg",
          value: this.$store.state.detailData.netWeightAvg,
        },
        {
          title: "Defects Summary",
          value: this.defectsSummary,
        },
        {
          title: "Main Defects",
          value: this.$store.state.detailData.mainDefects,
        },
      ];
    },
    sumOfTotalDefectsList() {
      return this.$store.state.sumOfTotalDefectsList;
    },
    defectsSummary() {
      let defectsSummary = "";
      let detailData = this.$store.state.detailData;

      defectsSummary = this.computedDefectsSummary(detailData);

      return defectsSummary.substring(0, defectsSummary.length - 1);
    },
  },
  created() {
    // 判断是否contianerId是否跟链接的相等
    let queryId = this.$route.query.lotId;
    let containerDetail = window.sessionStorage.getItem("containerDetail");
    if (containerDetail) {
      containerDetail = JSON.parse(containerDetail);
    }

    if (!containerDetail || queryId !== containerDetail.containerId) {
      // 更新数据
      this.getContainerData(queryId);
    } else {
      if (
        (!containerDetail && this.$store.state.containerDetail == "") ||
        !queryId
      ) {
        this.$router.push({ path: "/home" });
      } else {
        this.dataInit(containerDetail);
      }
    }
  },
  mounted() {
    // if (this.hasDetailData) {
    // this.$nextTick(function() {
    //   this.init();
    // });
    // window.addEventListener("resize", () => {
    //   this.chart.resize();
    // });
    // }
  },

  methods: {
    dataInit(containerDetail) {
      this.containerDetail = containerDetail;

      for (let i = 0; i < this.detailData.length; i++) {
        this.detailData[i].value = containerDetail[this.detailData[i].valueKey];
      }
      this.inspectionDate = containerDetail.date.replaceAll("-", "/");
      this.createTime = moment(containerDetail.createdAt).format(
        "YYYYMMDDHHmmss"
      );
      // 表单二的内容
      this.getNetWeightsAvg();
      this.getMainDefects();
      this.NoteData[0].value = this.containerDetail.typingBy;
      this.NoteData[1].value = this.containerDetail.temperatureRecorder;
      this.NoteData[2].value = this.containerDetail.packageNote;
      this.NoteData[3].value = this.containerDetail.traceAbility;
      this.NoteData[4].value = this.containerDetail.temperature;
      this.NoteData[5].value = this.containerDetail.quality;
      this.NoteData[6].value = this.containerDetail.inspectorNote;
      // 表单三的内容
      // this.getFruitBox(
      //   containerDetail.containerId,
      //   this.currentPage,
      //   this.entriesNum
      // );
      this.getFruitBoxCount();
      // 轮播图的内容
      this.getPictures();
    },
    init() {
      //2.初始化
      this.chart = Echarts.init(this.$refs.chart);
      let defectData = [
        { value: 0, name: "Excellent" },
        { value: 0, name: "Good" },
        { value: 0, name: "Fair" },
        { value: 0, name: "Poor" },
        { value: 0, name: "Bad" },
      ];

      for (let i = 0; i < this.sumOfTotalDefectsList.length; i++) {
        if (this.sumOfTotalDefectsList[i] < 10) {
          defectData[0].value++;
        } else if (this.sumOfTotalDefectsList[i] < 20) {
          defectData[1].value++;
        } else if (this.sumOfTotalDefectsList[i] < 30) {
          defectData[2].value++;
        } else if (this.sumOfTotalDefectsList[i] < 41) {
          defectData[3].value++;
        } else {
          defectData[4].value++;
        }
      }
      let colorList = ["#1f6cad", "#25AE5F", "#dfd545", "#da742c", "#da222e"];
      // defectData = defectData.filter((item, index) => {
      //   if (item.value === 0) {
      //     colorList.splice(index, 1);
      //   }
      //   return item.value != 0;
      // });
      let defectData2 = [];
      let colorList2 = [];
      for (let i = 0; i < defectData.length; i++) {
        if (defectData[i].value !== 0) {
          defectData2.push(defectData[i]);
          colorList2.push(colorList[i]);
        }
      }

      //3.配置数据
      let option = {
        tooltip: {
          trigger: "item",
        },

        legend: {
          orient: "vertical",
          right: 15,
          top: "center",
        },
        series: [
          {
            name: "Report Summary",
            type: "pie",
            radius: ["85%", "50%"],
            avoidLabelOverlap: false,
            itemStyle: {
              borderRadius: 0,
              borderColor: "#fff",
              borderWidth: 2,
            },
            label: {
              show: false,
              position: "center",
              normal: {
                show: true,
                position: "inside",
                formatter: "{d}%",
                textStyle: {
                  align: "center",
                  baseline: "middle",
                  fontFamily: "微软雅黑",
                  fontSize: 12,
                  fontWeight: "bold",
                },
              },
            },
            emphasis: {
              label: {
                show: true,
                fontSize: "14",
                fontWeight: "bold",
              },
            },
            labelLine: {
              show: false,
            },
            color: colorList2,
            data: defectData2,
          },
        ],
      };
      // 4.传入数据
      this.chart.setOption(option);
    },
    tabChange() {
      if (!this.thermographLoad && this.activeTab === "thermograph") {
        this.thermographLoad = true;
        // 获取pdf列表
        this.axios
          .get(
            `${process.env.VUE_APP_URL}/api/container/${this.containerDetail.containerId}/pdf`,
            {
              headers: {
                Authorization: window.sessionStorage.getItem("token"),
              },
            }
          )
          .then((res) => {
            for (let i = 0; i < res.data.data.length; i++) {
              this.pdfList[i] = {};
              this.pdfList[i].pdfLink = res.data.data[i];
              this.pdfList[i].pdfName = res.data.data[i].substring(
                res.data.data[i].lastIndexOf("/") + 1,
                res.data.data[i].lastIndexOf(".pdf")
              );
            }
            this.$set(this.pdfList, "key", 111);
          });
      }
    },
    downLoadPdf(link) {
      window.open(link);
      // this.axios
      //   .get(
      //     `${process.env.VUE_APP_URL}/api/container/${this.containerDetail.containerId}/pdf/download/${link}.pdf`,
      //     {
      //       headers: {
      //         Authorization: window.sessionStorage.getItem("token"),
      //       },
      //     }
      //   )
      //   .then((res) => {
      //     console.log(res);
      //     let fileName = res.data.data[0];
      //     // this.axios.get(
      //     //   `${process.env.VUE_APP_URL}/api/container/${this.containerDetail.containerId}/excel/download/test1.xlsx`,
      //     //   {
      //     //     headers: {
      //     //       Authorization: window.sessionStorage.getItem("token"),
      //     //     },
      //     //   }
      //     // ).then(res=>{

      //     // })
      //     window.location.href = fileName;
      //   });
    },
    formatter(row, column) {
      return row.address;
    },
    showImg(index) {
      const viewer = this.$el.querySelector(".images").$viewer;
      viewer.index = index;
      viewer.show();
    },
    // 获取总条数
    getFruitBoxCount() {
      this.axios
        .get(
          `${process.env.VUE_APP_URL}/api/container/count/fruitBox?containerId=${this.containerDetail.containerId}`,
          {
            headers: {
              Authorization: window.sessionStorage.getItem("token"),
            },
          }
        )
        .then((res) => {
          this.totalNum = res.data.data;
          if (this.firstload) {
            this.firstload = false;
            this.getAllFruitBox(
              this.containerDetail.containerId,
              1,
              this.totalNum
            );
          }
        });
    },
    // 获取所有托盘数据
    getAllFruitBox(containerId, page, size) {
      this.axios
        .get(
          `${process.env.VUE_APP_URL}/api/container/${containerId}/fruitBoxes?page=${page}&size=${size}`,
          {
            headers: {
              Authorization: window.sessionStorage.getItem("token"),
            },
          }
        )
        .then((res) => {
          this.allTableData = res.data.data.fruitBoxes;

          let sumOfTotalDefectsList = [];
          for (let i = 0; i < this.allTableData.length; i++) {
            sumOfTotalDefectsList.push(this.allTableData[i].sumOfTotalDefects);
          }
          for (let i = 0; i < this.allTableData.length; i++) {
            // 判断数据是否显示
            for (let key in this.allTableData[i]) {
              if (this.allTableData[i][key]) {
                this.showList[key] = true;
              } else {
                if (this.showList[key] !== true) {
                  this.showList[key] = false;
                }
              }
            }
            //
            this.allTableData[i].misshapen =
              (this.allTableData[i].misshapen * 100).toFixed(2) + "%";
            this.allTableData[i].oversize =
              (this.allTableData[i].oversize * 100).toFixed(2) + "%";
            this.allTableData[i].underSize =
              (this.allTableData[i].underSize * 100).toFixed(2) + "%";
            this.allTableData[i].noStem =
              (this.allTableData[i].noStem * 100).toFixed(2) + "%";
            this.allTableData[i].lackOfColor =
              (this.allTableData[i].lackOfColor * 100).toFixed(2) + "%";
            this.allTableData[i].decay =
              (this.allTableData[i].decay * 100).toFixed(2) + "%";
            this.allTableData[i].cracking =
              (this.allTableData[i].cracking * 100).toFixed(2) + "%";
            this.allTableData[i].bruises =
              (this.allTableData[i].bruises * 100).toFixed(2) + "%";
            this.allTableData[i].decayIncidence =
              (this.allTableData[i].decayIncidence * 100).toFixed(2) + "%";
            this.allTableData[i].mold =
              (this.allTableData[i].mold * 100).toFixed(2) + "%";
            this.allTableData[i].moldIncidence =
              (this.allTableData[i].moldIncidence * 100).toFixed(2) + "%";
            this.allTableData[i].soft =
              (this.allTableData[i].soft * 100).toFixed(2) + "%";
            this.allTableData[i].sensitive =
              (this.allTableData[i].sensitive * 100).toFixed(2) + "%";
            this.allTableData[i].shriveling =
              (this.allTableData[i].shriveling * 100).toFixed(2) + "%";
            this.allTableData[i].pedicelarSunken =
              (this.allTableData[i].pedicelarSunken * 100).toFixed(2) + "%";
            this.allTableData[i].bswscr =
              (this.allTableData[i].bswscr * 100).toFixed(2) + "%";
            this.allTableData[i].so2Damage =
              (this.allTableData[i].so2Damage * 100).toFixed(2) + "%";
            this.allTableData[i].insectPresence =
              (this.allTableData[i].insectPresence * 100).toFixed(2) + "%";
            this.allTableData[i].sumOfQualityDefects =
              (this.allTableData[i].sumOfQualityDefects * 100).toFixed(2) + "%";
            this.allTableData[i].sumOfConditionDefects =
              (this.allTableData[i].sumOfConditionDefects * 100).toFixed(2) +
              "%";
            this.allTableData[i].sumOfTotalDefects =
              (this.allTableData[i].sumOfTotalDefects * 100).toFixed(2) + "%";
            this.allTableData[i].freezingDamage =
              (this.allTableData[i].freezingDamage * 100).toFixed(2) + "%";
            this.allTableData[i].russet =
              (this.allTableData[i].russet * 100).toFixed(2) + "%";
            this.allTableData[i].scars =
              (this.allTableData[i].scars * 100).toFixed(2) + "%";
            this.allTableData[i].pitting =
              (this.allTableData[i].pitting * 100).toFixed(2) + "%";
            this.allTableData[i].dryStem =
              (this.allTableData[i].dryStem * 100).toFixed(2) + "%";
            this.allTableData[i].flavorChanged =
              (this.allTableData[i].flavorChanged * 100).toFixed(2) + "%";
          }

          this.getFruitBox(this.currentPage, this.entriesNum);

          this.$store.commit("setSumOfTotalDefectsList", sumOfTotalDefectsList);
          // 初始化表格
          this.init();
          window.addEventListener("resize", () => {
            this.chart.resize();
          });
        });
    },
    // 根据Container Id，查询集装箱数据
    getContainerData(containerId) {
      this.axios
        .get(`${process.env.VUE_APP_URL}/api/container/${containerId}`, {
          headers: {
            Authorization: window.sessionStorage.getItem("token"),
          },
        })
        .then((res) => {
          window.sessionStorage.setItem(
            "containerDetail",
            JSON.stringify(res.data.data)
          );
          this.$store.commit("setContainerDetail", res.data.data);
          this.dataInit(res.data.data);
        });
    },
    // 分页获取指定的集装箱的托盘数据
    // getFruitBox(containerId, page, size) {
    //   this.axios
    //     .get(
    //       `${process.env.VUE_APP_URL}/api/container/${containerId}/fruitBoxes?page=${page}&size=${size}`,
    //       {
    //         headers: {
    //           Authorization: window.sessionStorage.getItem("token"),
    //         },
    //       }
    //     )
    //     .then((res) => {
    //       this.tableData = res.data.data;
    //     });
    // },
    getFruitBox(page, size) {
      this.tableData = [];
      for (
        let i = (page - 1) * size;
        i < this.allTableData.length && i < page * size;
        i++
      ) {
        this.tableData.push(this.allTableData[i]);
      }
      if (this.currentPage !== 1 && this.tableData.length === 0) {
        this.currentChange(this.currentPage - 1);
      }
    },
    // 改变条数
    changeEntries(value) {
      this.entriesNum = value;
      this.getFruitBox(this.currentPage, this.entriesNum);
    },
    // 改变页码数
    currentChange(value) {
      this.currentPage = value;
      this.getFruitBox(this.currentPage, this.entriesNum);
    },
    // 转换成pdf
    toPdf() {
      this.ExportSavePdf({
        detail: this.containerDetail,
        avg: this.$store.state.detailData,
        defectsSummary: this.defectsSummary,
        allData: this.allTableData,
        imgList: this.imgList,
      });
    },
    // 下载xlsx
    downloadXLSX() {
      this.axios
        .get(
          `${process.env.VUE_APP_URL}/api/container/${this.containerDetail.containerId}/excel`,
          {
            headers: {
              Authorization: window.sessionStorage.getItem("token"),
            },
          }
        )
        .then((res) => {
          if (process.env.NODE_ENV === "development") {
            window.open(res.data.data[0]);
          } else {
            let fileName = res.data.data[0].substring(
              res.data.data[0].indexOf("/api"),
              res.data.data[0].length
            );
            window.open(fileName);
          }
        });
    },
    // 获取所有图片
    getPictures() {
      this.axios
        .get(
          `${process.env.VUE_APP_URL}/api/container/${this.containerDetail.containerId}/picture`,
          {
            headers: {
              Authorization: window.sessionStorage.getItem("token"),
            },
          }
        )
        .then((res) => {
          let pictureList = res.data.data.reverse();
      
          if (pictureList.length === 0) return;
          // 判断生产环境还是开发环境
          if (process.env.NODE_ENV === "development") {
            for (let i = 0; i < pictureList.length; i++) {
              this.imgList[i] = {};
              this.imgList[i].imgSrc = pictureList[i];
            }
          } else {
            if (process.env.VUE_APP_COMPANY === "QYSW") {
              for (let i = 0; i < pictureList.length; i++) {
                this.imgList[i] = {};
                this.imgList[i].imgSrc = pictureList[i].substring(
                  pictureList[i].indexOf("/api"),
                  pictureList[i].length
                );
              }
            } else {
              for (let i = 0; i < pictureList.length; i++) {
                this.imgList[i] = {};
                this.imgList[i].imgSrc =
                  "api/" +
                  pictureList[i].substring(
                    pictureList[i].indexOf("/download"),
                    pictureList[i].length
                  );
              }
            }
          }
          this.imgListShow = true;
        });
    },
  },
};
</script>

<style lang="less">
.detail {
  width: calc(100% - 181px);
  height: calc(100% - 57px);
  float: right;
  background-color: #f1f3f6;
  padding: 40px;
  overflow: auto;
  transition: all 0.5s;
  background-image: url(../assets/linea_tiempo_fondo-2.jpg);
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  .tableOne {
    width: 100%;
    height: 360px;
    background-color: #fff;
    padding: 18px 23px 40px;
    min-width: 880px;
    margin-bottom: 28px;
    position: relative;
    background-image: url(../assets/fondo_marcas4.png),
      url("../assets/fondo_marcas5.png");
    background-position: left center, right, center;
    background-size: contain, contain;
    background-repeat: no-repeat, no-repeat;

    .header_table {
      width: 100%;
      height: 28px;
      display: flex;
      justify-content: space-between;
      margin-bottom: 5px;
      .table_left {
        height: 100%;
        display: flex;

        .flag {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 28px;
          height: 100%;
          margin-right: 9px;
          img {
            height: 50%;
            width: auto;
          }
        }
        .toZip,
        .toPdf {
          border: 1px solid #d5d5d5;
          border-radius: 5px;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 28px;
          height: 100%;
          margin-right: 9px;
          cursor: pointer;
          img {
            height: 60%;
            width: auto;
          }
        }
        .uploadData {
          border: 1px solid #d5d5d5;
          border-radius: 5px;
          padding: 0 10px;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
          color: #6a6c6f;
          font-weight: 700;
          font-family: Poppins-SemiBold;
        }
      }
      .table_right {
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 12px;
        color: #6a6c6f;
        font-weight: 700;
        span {
          font-family: Poppins-SemiBold;
        }
      }
    }
    .table_container {
      width: 100%;
      .oneRow {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        li {
          width: 9.5%;
          height: 54px;
          white-space: wrap;
          font-size: 12px;
          padding-left: 10px;
          padding-top: 10px;
          overflow: auto;
          user-select: text;
          border-top: 1px solid #dddddd;
          border-left: 1px solid #dddddd;
          color: #333333;
          font-family: Poppins-Regular;
          &::-webkit-scrollbar {
            display: none;
          }
          &:nth-child(odd) {
            background-color: #f7f9fa;
            font-weight: 700;
            font-family: Poppins-Bold;
          }
          // &:nth-child(even) {
          //   color: #333333;
          // }

          // 5 15 25 35
          &:nth-child(10n + 5) {
            width: 14.5%;
          }
          &:nth-child(10n) {
            border-right: 1px solid #dddddd;
          }
          &:nth-child(n + 41) {
            border-bottom: 1px solid #dddddd;
          }
        }
      }
    }
  }
  .tableTwo {
    width: 100%;
    height: 300px;
    background-color: #fff;
    min-width: 880px;
    position: relative;
    margin-bottom: 28px;
    &::before {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      background-image: url(../assets/fondo_marcas4.png),
        url("../assets/fondo_marcas5.png");
      background-position: left center, right, center;
      background-size: contain, contain;
      background-repeat: no-repeat, no-repeat;
      transform: rotate(180deg);
      pointer-events: none;
      left: 0;
      top: 0;
    }
    .relatedReport {
      position: absolute;
      right: 0;
      top: 0;
      z-index: 1;
      font-size: 12px;
      color: #456789;
      cursor: pointer;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      // font-weight: 700;
      img {
        height: 30%;
        width: auto;
        margin-left: 10px;
      }
    }
  }
  .tableThree {
    width: 100%;
    min-height: 300px;
    background-color: #fff;
    min-width: 880px;
    margin-bottom: 28px;
    position: relative;
    &::before {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      background-image: url(../assets/fondo_marcas4.png),
        url("../assets/fondo_marcas5.png");
      background-position: left center, right, center;
      background-size: contain, contain;
      background-repeat: no-repeat, no-repeat;

      pointer-events: none;
      left: 0;
      top: 0;
    }
    .grid_content {
      width: 100%;
      height: 100%;
      padding: 22px 22px;
      .advancedORbasic {
        margin-bottom: 21px;
      }
      .toolOftable {
        font-size: 12px;
        color: #333;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 12px;
        .changeEntries,
        input {
          font-family: Poppins-Regular;
        }
        .searchEntries {
          display: flex;
          align-items: center;
          justify-content: center;
          input {
            width: 150px;
          }
        }
      }
      .entriesShow {
        font-size: 12px;
        margin-top: 12px;
        margin-bottom: 10px;
        color: #333;
        font-family: Poppins-Regular;
      }
      .table3Page {
        display: flex;
        justify-content: right;
        .number {
          font-family: Poppins-Regular;
        }
      }
    }
    .overview {
      width: 100%;
      li {
        &:first-child {
          text-align: right;
        }
        span {
          font-weight: 700;
        }
      }
    }
    .generalList,
    .otherList,
    .qualityList,
    .conditionList,
    .totalList {
      width: 100%;
      display: flex;

      ul {
        width: 100%;
        max-width: 200px;
        li {
          width: 100%;
          // height: 20%;
          span {
            font-weight: 700;
          }
        }
      }
    }
  }
  .imageCarousel {
    width: 100%;
    height: 265px;
    background-color: #fff;
    min-width: 880px;
    position: relative;
    &::before {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      background-image: url(../assets/fondo_marcas4.png),
        url("../assets/fondo_marcas5.png");
      background-position: left center, right, center;
      background-size: contain, contain;
      background-repeat: no-repeat, no-repeat;
      transform: rotate(180deg);
      pointer-events: none;
      left: 0;
      top: 0;
    }
    .imageHeader {
      height: 35px;
      width: 100%;
      padding-left: 8px;
      display: flex;
      align-items: center;
      justify-content: left;
      border-bottom: 1px solid #ddd;
      font-size: 12px;
      font-weight: 700;
      color: #333;
      position: relative;
      font-family: Poppins-Bold;
    }
    .carouselImg {
      width: 90%;
      height: 230px;
      position: relative;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      .imgList {
        height: 65%;
        .imgBox {
          width: 150px;
          height: 150px;
          text-align: center;
          display: flex !important;
          align-items: center;
          justify-content: center;
          img {
            max-height: 150px;
            max-width: 150px;
          }
        }
      }
    }
  }
  .images {
    visibility: hidden;
    img {
      display: none;
    }
  }
}
</style>

<style lang="less">
.el-tabs__item {
  font-family: Poppins-Regular;
}
.slick-dots li button:before {
  font-family: none;
  font-size: 26px;
}
.slick-prev:before,
.slick-next:before {
  color: #6bb3e2;
}
.tableTwo,
.tableThree {
  .el-pagination {
    padding: 0;
  }
  .el-table {
    color: #333333;
    // font-weight: 600;
  }
  .el-tag {
    color: #fff;
    font-family: Poppins-Regular;
  }
  // .el-table--scrollable-x .el-table__body-wrapper {
  //   &::-webkit-scrollbar {
  //     display: none;
  //   }
  // }
  .el-table thead {
    color: #333;
  }
  .el-table .el-table__cell {
    padding: 9px 0;
  }
  .el-input-number--small {
    width: 72.5px;
  }
  .el-input-number--small .el-input-number__decrease,
  .el-input-number--small .el-input-number__increase {
    width: 22px;
  }
  .el-input-number.is-controls-right .el-input__inner {
    padding-right: 32px;
    padding-left: 0px;
  }
  .el-radio-button__orig-radio:checked + .el-radio-button__inner {
    background-color: #35495d;
    border-color: #35495d;
  }
  .el-radio-button__inner {
    font-size: 12px;
    padding: 10px 13px;
  }
  .el-tabs--border-card {
    box-shadow: none;
    border: none;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  .el-tabs--border-card > .el-tabs__header .el-tabs__item.is-active {
    border: 1px solid #ebebeb;
    border-bottom-color: transparent;
    color: #555555;
  }
  .el-tabs--border-card > .el-tabs__header .el-tabs__item {
    margin-top: 0;
  }
  .el-tabs--border-card > .el-tabs__header .el-tabs__item + .el-tabs__item,
  .el-tabs--border-card > .el-tabs__header .el-tabs__item:first-child {
    margin-left: 0;
  }
  .el-tabs__content {
    border: 1px solid #ebebeb;
    border-top-color: transparent;
    flex: 1;
  }
  .el-tabs--border-card > .el-tabs__header {
    background-color: #fff;
  }
  .el-tabs--border-card > .el-tabs__header .el-tabs__item {
    color: #456789;
  }
  .el-tab-pane {
    width: 100%;
    height: 100%;
    display: flex;
  }
  .charts {
    width: 50%;
    flex: 1;
    height: 100%;
  }
  .reprot_content {
    flex: 1;
    position: relative;
    .reprot_Box {
      position: absolute;
      top: 10%;
      left: 3%;
      height: 80%;
      overflow: auto;
      &::-webkit-scrollbar {
        display: none;
      }
      dl {
        color: #343434;
        font-size: 12px;
        width: 50%;
        dt {
          font-family: Poppins-Regular;
          min-width: 120px;
        }
        dd {
          font-weight: 700;
          margin-bottom: 10px;
          font-family: Poppins-Bold;
          min-width: 120px;
        }
      }
    }
  }
  .gapLine {
    position: absolute;
    height: 85%;
    background-color: #dddddd;
    width: 1px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  .el-tabs--border-card > .el-tabs__content {
    padding: 0;
  }
  .note_content {
    width: 100%;
    height: 100%;
    overflow: auto;
    &::-webkit-scrollbar {
      display: none;
    }
    dl {
      color: #35495d;
      font-size: 13px;
      padding-left: 2em;
      dt {
        margin-top: 20px;
        margin-bottom: 8px;
        font-family: Poppins-Regular;
      }
      dd {
        font-weight: 700;
        // margin-bottom: 10px;
        padding-bottom: 20px;
        border-bottom: 1px solid #ddd;
        font-family: Poppins-Bold;
      }
    }
  }
  .thermograph_content {
    width: 100%;
    height: 100%;
    overflow: auto;
    padding: 20px;
    &::-webkit-scrollbar {
      display: none;
    }
    .cardList {
      width: 100%;
      height: 100%;
      display: flex;
      li {
        border: 1px solid #ddd;
        width: 240px;
        height: 90%;
        margin-right: 30px;
        .cardTopBox {
          height: 79%;
          padding: 20px;
          font-size: 13px;
          font-weight: 700;
          color: #4a4a4a;
          border-bottom: 1px solid #ddd;
          position: relative;
          .cardNum {
            overflow: hidden;
            text-overflow: ellipsis;
            font-family: Poppins-Bold;
            span {
              margin-left: 9px;
              font-size: 16px;
              color: #2fb266;
              letter-spacing: 0.05em;
              width: 160px;
              text-overflow: ellipsis;
              //  overflow: hidden;
              display: inline-block;
              font-family: Poppins-Bold;
            }
          }
          .cardType {
            position: absolute;
            bottom: 10px;
            width: 80%;
            right: 15px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            span {
              font-family: Poppins-Regular;
            }
          }
        }
        .cardBtn {
          height: 21%;
          width: 100%;
          background-color: #f7f9fa;
          display: flex;
          align-items: center;
          justify-content: right;
          padding-right: 15px;
          span {
            font-family: Poppins-Regular;
          }
          img {
            height: 10px;
            width: auto;
            margin-right: 5px;
          }
        }
      }
    }
  }
  .el-button {
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    background: #2fb266;
    border: 1px solid #2fb266;
    color: #fff;
    -webkit-appearance: none;
    text-align: center;
    box-sizing: border-box;
    outline: 0;
    margin: 0;
    transition: 0.1s;
    font-weight: 500;
    padding: 4px 15px;
    font-size: 12px;
    border-radius: 4px;
    margin-left: 10px;
  }
}

.tableThree {
  #pane-1 {
    .el-collapse {
      border-top: none;
      border-bottom: none;
      width: 100%;
      height: 100%;
      padding: 22px;
      min-height: 260px;
    }
    .el-collapse-item__wrap {
      padding: 5px;
    }
    .el-tabs--border-card > .el-tabs__header {
      background-color: #fff;
      border-bottom: 1px solid #ebebeb;
    }
    .el-tabs--border-card > .el-tabs__header .el-tabs__item + .el-tabs__item,
    .el-tabs--border-card > .el-tabs__header .el-tabs__item:first-child {
      font-size: 12px;
    }
    .el-tab-pane {
      font-size: 12px;
      padding: 25px;
    }
  }
  .el-table th.el-table__cell > .cell {
    white-space: nowrap;
    text-overflow: clip;
    overflow-x: auto;
    &::-webkit-scrollbar {
      display: none;
    }
  }
}
</style>
