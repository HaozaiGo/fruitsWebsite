<template>
  <div
    class="register"
    :style="{
      width: $store.state.showMenu === true ? '100%' : 'calc(100% - 181px)',
    }"
  >
    <div class="registerBox">
      <div class="registerHeader">{{ $t("register.sign") }}</div>
      <div class="registerForm">
        <el-form :model="registerInfo">
          <el-form-item :label="$t('register.name')" class="name">
            <el-input size="small" v-model="registerInfo.name"></el-input>
          </el-form-item>
          <el-form-item :label="$t('register.username')" class="username">
            <el-input size="small" v-model="registerInfo.username"></el-input>
          </el-form-item>
          <!-- <el-form-item label="Email" class="email">
            <el-input size="small" v-model="registerInfo.email"></el-input>
          </el-form-item> -->
          <el-form-item :label="$t('register.password')" class="password">
            <el-input
              type="password"
              size="small"
              v-model="registerInfo.password"
            ></el-input>
          </el-form-item>
          <!-- <el-checkbox v-model="registerInfo.admin">{{
            $t("register.admin")
          }}</el-checkbox> -->

          <el-form-item :label="$t('register.role')" class="role">
            <el-select
              v-model="registerInfo.role"
              :placeholder="$t('upload.pleaseChoose')"
              size="small"
            >
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item
            :label="$t('register.Company')"
            class="company"
            v-if="registerInfo.role === 'USER'"
          >
            <el-input size="small" v-model="registerInfo.company"></el-input>
          </el-form-item>
          <div class="help">{{ tip }}</div>
          <el-form-item>
            <el-button size="small" type="primary" @click="onSubmit">{{
              $t("register.create")
            }}</el-button>
            <el-button size="small" @click="clear">{{
              $t("register.clear")
            }}</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
    <div class="registerList">
      <div class="registerListHeader">{{ $t("register.userList") }}</div>
      <div class="tableDataList">
        <el-table :data="tableData" border stripe>
          <el-table-column prop="name" :label="$t('register.name')" width="130">
          </el-table-column>
          <el-table-column
            prop="username"
            :label="$t('register.username')"
            width="130"
          >
          </el-table-column>
          <el-table-column
            prop="createdAt"
            :label="$t('register.createdAt')"
            width="180"
          >
          </el-table-column>
          <el-table-column
            prop="authorities"
            :label="$t('register.role')"
            width="130"
          >
          </el-table-column>
          <el-table-column
            prop="createdBy"
            :label="$t('register.CreatedBy')"
            width="130"
          >
          </el-table-column>
          <el-table-column
            prop="company"
            :label="$t('register.Company')"
            width="130"
          >
          </el-table-column>
          <el-table-column :label="$t('register.Option')" align="center">
            <template slot-scope="scope">
              <el-popconfirm
                :confirm-button-text="$t('register.confirm')"
                :cancel-button-text="$t('register.cancel')"
                icon="el-icon-info"
                icon-color="red"
                :title="$t('register.sure') + `(${scope.row.username})`"
                @confirm="handleDelete(scope.$index, scope.row)"
                confirm-button-type="danger"
              >
                <el-button size="mini" type="danger" slot="reference">{{
                  $t("register.delete")
                }}</el-button>
              </el-popconfirm>
            </template>
          </el-table-column>
        </el-table>
        <!-- 显示数量 -->
        <div class="entriesShow">
          {{ $t("home.showing") }} {{ (currentPage - 1) * entriesNum + 1 }}
          {{ $t("home.to") }} {{ currentPage * entriesNum }} {{ $t("home.of") }}
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
    </div>
  </div>
</template>

<script>
import moment from "moment";
export default {
  data() {
    return {
      registerInfo: {
        username: "",
        name: "",
        password: "",
        role: "",
        company: "",
      },
      tip: "",
      options: [
        {
          value: "QC",
          label: this.$t("register.QC"),
        },
        {
          value: "USER",
          label: this.$t("register.USER"),
        },
        {
          value: "ADMIN",
          label: this.$t("register.ADMIN"),
        },
      ],
      value: "",
      tableData: [],
      currentPage: 1,
      entriesNum: 10,
      totalNum: 0,
    };
  },
  created() {
    this.getAccount();
  },
  methods: {
    onSubmit() {
      let that = this;

      if (
        this.registerInfo.name == "" ||
        this.registerInfo.username == "" ||
        this.registerInfo.password == ""
      ) {
        if (this.registerInfo.name == "") {
          this.tip = this.$t("register.nameNull");
        } else if (this.registerInfo.username == "") {
          this.tip = this.$t("register.usernameNull");
        } else if (this.registerInfo.password == "") {
          this.tip = this.$t("register.passwordNull");
        }
      } else {
      
        this.axios
          .post(
            `${process.env.VUE_APP_URL}/api/admin/register`,
            {
              name: that.registerInfo.name,
              username: that.registerInfo.username,
              password: that.registerInfo.password,
              role: that.registerInfo.role,
              company: that.registerInfo.company,
            },
            {
              headers: {
                Authorization: window.sessionStorage.getItem("token"),
              },
            }
          )
          .then(
            (res) => {
              this.$message({
                showClose: true,
                message: this.$t("register.success"),
                type: "success",
              });
              this.getAccount(this.currentPage, this.entriesNum);
              this.clear();
            },
            (error) => {
              this.tip = this.$t("register.nameExist");
            }
          );
      }
    },
    clear() {
      this.registerInfo = {
        username: "",
        name: "",
        password: "",
        admin: false,
      };
    },
    getAccount(page, size) {
      this.axios
        .get(
          `
      ${process.env.VUE_APP_URL}/api/admin/account?page=${this.currentPage}&size=${this.entriesNum}
      `,
          {
            headers: {
              Authorization: window.sessionStorage.getItem("token"),
            },
          }
        )
        .then((res) => {
          this.totalNum = res.data.data.count;
          this.tableData = res.data.data.users;
          for (let i = 0; i < this.tableData.length; i++) {
            this.tableData[i].createdAt = moment(
              this.tableData[i].createdAt
            ).format("YYYY-MM-DD HH:mm:ss");
          }
        });
    },
    handleDelete(index, row) {
    
      // 删除账号
      this.axios
        .delete(
          ` ${process.env.VUE_APP_URL}/api/admin/account?username=${row.username}`,

          {
            headers: {
              Authorization: window.sessionStorage.getItem("token"),
            },
          }
        )
        .then((res) => {
          this.getAccount(this.currentPage, this.entriesNum);
        });
    },
    currentChange(value) {
      this.currentPage = value;
      this.getAccount(this.currentPage, this.entriesNum);
    },
  },
};
</script>

<style lang="less">
.register {
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
  .registerBox {
    width: 100%;
    background-color: #fff;
    min-width: 880px;
    margin-bottom: 28px;
    position: relative;
    background-image: url(../assets/fondo_marcas4.png),
      url("../assets/fondo_marcas5.png");
    background-position: left center, right, center;
    background-size: contain, contain;
    background-repeat: no-repeat, no-repeat;
    .registerHeader {
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
    .registerForm {
      width: 100%;
      padding: 18px 23px;
      .el-form-item__label {
        font-family: Poppins-Bold;
      }
      input,
      button span {
        font-family: Poppins-Regular;
      }
      .username,
      .name,
      .company {
        width: 240px;
        display: inline-block;
        margin-right: 24px;
        input {
          background-color: #f3f3f4;
        }
      }
      .role {
        width: 240px;
        display: inline-block;
        margin-right: 24px;
        input {
          width: 240px;
        }
      }
      .email,
      .password {
        width: 504px;
        input {
          background-color: #f3f3f4;
        }
      }
      .help {
        margin-top: 10px;
        color: #b11820;
        font-size: 12px;
      }
    }
  }
  .registerList {
    width: 100%;
    background-color: #fff;
    min-width: 880px;
    margin-bottom: 28px;
    position: relative;
    background-image: url(../assets/fondo_marcas2.png),
      url("../assets/fondo_marcas3.png");
    background-position: left center, right, center;
    background-size: contain, contain;
    background-repeat: no-repeat, no-repeat;
    .registerListHeader {
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
    .tableDataList {
      padding: 22px;
      button span {
        font-family: Poppins-Regular;
      }
    }
    .entriesShow {
      font-size: 12px;
      margin-top: 12px;
      margin-bottom: 10px;
      color: #333;
      position: relative;
      font-family: Poppins-Regular;
    }
    .table3Page {
      display: flex;
      justify-content: right;
      position: relative;
      .number {
        font-family: Poppins-Regular;
      }
    }
  }
  .el-form-item__label,
  .el-checkbox__label {
    font-weight: 700;
    color: #0d0c22;
  }
  // .el-form-item__content {
  //   margin-top: 12px;
  // }
}
.el-popconfirm__main {
  margin-bottom: 10px;
}
</style>
