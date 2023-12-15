<template>
  <div :class="$style.adminDataUser">
    <div :class="$style.frame">
      <div :class="$style.frame1">
        <div :class="$style.frameChild" />
      </div>
      <div :class="$style.frame2">
        <div :class="$style.tableColumn">
          <div :class="$style.heading">
            <div :class="$style.headingChild" />
            <div :class="$style.id">ID</div>
            <img :class="$style.headingItem" alt="" src="/group-2061.svg" />
          </div>
          <div :class="$style.titleValue">
            <div :class="$style.div">1002</div>
            <div :class="$style.titleValueChild" />
          </div>
          <div :class="$style.titleValue">
            <div :class="$style.div">1002</div>
            <div :class="$style.titleValueChild" />
          </div>
          <div :class="$style.titleValue">
            <div :class="$style.div">1003</div>
            <div :class="$style.titleValueInner" />
          </div>
          <div :class="$style.titleValue">
            <div :class="$style.div">1004</div>
            <div :class="$style.titleValueChild" />
          </div>
        </div>
      </div>
      <div :class="$style.frame3">
        <div :class="$style.userAccount">User Account</div>
      </div>
      <div :class="$style.frame4">
        <div :class="$style.tableColumn1">
          <div :class="$style.heading1">
            <div :class="$style.headingChild" />
            <div :class="$style.username">Username</div>
            <img :class="$style.headingItem" alt="" src="/group-2061.svg" />
          </div>
          <div :class="$style.titleValue4">
            <div :class="$style.titleValueChild1" />
            <div :class="$style.titleValueChild2" />
            <div :class="$style.div3">20001</div>
          </div>
          <div :class="$style.titleValue">
            <div :class="$style.testTitle1">20002</div>
            <div :class="$style.titleValueChild" />
          </div>
          <div :class="$style.titleValue">
            <div :class="$style.testTitle1">20003</div>
            <div :class="$style.titleValueInner" />
          </div>
          <div :class="$style.titleValue">
            <div :class="$style.testTitle1">20004</div>
            <div :class="$style.titleValueChild" />
          </div>
        </div>
      </div>
      <div :class="$style.frame5">
        <div :class="$style.tableColumn2">
          <div :class="$style.heading2">
            <div :class="$style.nama">Nama</div>
            <div :class="$style.lineDiv" />
          </div>
          <div :class="$style.dateValue">
            <div :class="$style.loremIpsu">LOREM ipsu</div>
            <div :class="$style.dateValueChild" />
          </div>
          <div :class="$style.dateValue">
            <div :class="$style.div6">120002</div>
            <div :class="$style.dateValueChild" />
          </div>
          <div :class="$style.dateValue">
            <div :class="$style.div7">120005</div>
            <div :class="$style.dateValueChild" />
          </div>
          <div :class="$style.dateValue">
            <div :class="$style.div7">120004</div>
            <div :class="$style.dateValueChild" />
          </div>
        </div>
      </div>
      <div :class="$style.frame6">
        <div :class="$style.tableColumn3">
          <div :class="$style.heading2">
            <div :class="$style.password">Password</div>
            <div :class="$style.headingChild1" />
          </div>
          <div :class="$style.dateValue">
            <div :class="$style.loremIpsu">LOREM ipsu</div>
            <div :class="$style.dateValueChild2" />
          </div>
          <div :class="$style.dateValue">
            <div :class="$style.div6">120002</div>
            <div :class="$style.dateValueChild2" />
          </div>
          <div :class="$style.dateValue">
            <div :class="$style.div7">120005</div>
            <div :class="$style.dateValueChild2" />
          </div>
          <div :class="$style.dateValue">
            <div :class="$style.div7">120004</div>
            <div :class="$style.dateValueChild2" />
          </div>
        </div>
      </div>
      <div :class="$style.frame7">
        <div :class="$style.tableColumn4">
          <div :class="$style.heading1">
            <div :class="$style.headingChild" />
            <div :class="$style.role">Role</div>
            <img :class="$style.headingItem" alt="" src="/group-2064.svg" />
          </div>
          <div :class="$style.titleValue4">
            <div :class="$style.titleValueChild1" />
            <div :class="$style.titleValueChild2" />
            <div :class="$style.div3">20001</div>
          </div>
          <div :class="$style.titleValue">
            <div :class="$style.testTitle1">20002</div>
            <div :class="$style.titleValueChild" />
          </div>
          <div :class="$style.titleValue">
            <div :class="$style.testTitle1">20003</div>
            <div :class="$style.titleValueInner" />
          </div>
          <div :class="$style.titleValue">
            <div :class="$style.testTitle1">20004</div>
            <div :class="$style.titleValueChild" />
          </div>
        </div>
      </div>
      <div :class="$style.frame8">
        <div :class="$style.iconButton" @click="onIconButtonContainerClick">
          <div :class="$style.tambahParent">
            <div :class="$style.tambah">Tambah</div>
            <img
              :class="$style.component1Icon"
              alt=""
              src="/component-11.svg"
            />
          </div>
        </div>
      </div>
      <div :class="$style.frame9">
        <div :class="$style.tableColumn5">
          <div :class="$style.heading5">
            <div :class="$style.headingChild" />
            <div :class="$style.action">Action</div>
          </div>
          <div :class="$style.actionValue">
            <div :class="$style.actionValueChild" />
            <img :class="$style.actionValueItem" alt="" src="/group-11.svg" />
          </div>
          <div :class="$style.actionValue">
            <div :class="$style.actionValueChild" />
            <img :class="$style.actionValueItem" alt="" src="/group-11.svg" />
          </div>
          <div :class="$style.actionValue">
            <div :class="$style.actionValueChild" />
            <img :class="$style.actionValueItem" alt="" src="/group-11.svg" />
          </div>
          <div :class="$style.actionValue">
            <div :class="$style.actionValueChild4" />
            <img :class="$style.actionValueItem" alt="" src="/group-11.svg" />
          </div>
        </div>
      </div>
    </div>
    <div :class="$style.sidebar">
      <img
        :class="$style.sidebarChild"
        alt=""
        src="/rectangle-23.svg"
        data-scroll-to="rectangle"
      />
      <div :class="$style.profile">
        <div :class="$style.suikaParent">
          <b :class="$style.suika">SUIKA</b>
          <div :class="$style.pexelsPhoto23790041" />
          <img :class="$style.eiuserIcon" alt="" src="/eiuser3.svg" />
        </div>
      </div>
      <div :class="$style.navigationParent">
        <div :class="$style.navigation">
          <div :class="$style.title">
            <div :class="$style.overline">Main</div>
          </div>
          <div :class="$style.link">
            <img
              :class="$style.iconHomeSimpleDoor"
              alt=""
              src="/icon--homesimpledoor.svg"
            />
            <div :class="$style.label" @click="onLabelTextClick">Dashboard</div>
          </div>
          <div :class="$style.link">
            <img
              :class="$style.materialSymbolspersonSearchIcon"
              alt=""
              src="/materialsymbolspersonsearch.svg"
            />
            <div :class="$style.label" @click="onLabelText1Click">History</div>
          </div>
          <div :class="$style.dropdown" @click="onDropdownContainerClick">
            <div :class="$style.link2">
              <img
                :class="$style.iconHomeSimpleDoor"
                alt=""
                src="/icon--reports.svg"
              />
              <div :class="$style.label2">Master Data</div>
            </div>
          </div>
          <div :class="$style.link">
            <img
              :class="$style.iconHomeSimpleDoor"
              alt=""
              src="/icon--page.svg"
            />
            <div :class="$style.label" :onClick="onLabelText3Click">
              Peminjaman
            </div>
          </div>
          <div :class="$style.dropdown1">
            <div :class="$style.link2">
              <img
                :class="$style.iconHomeSimpleDoor"
                alt=""
                src="/icon--user-1.svg"
              />
              <div :class="$style.label2">Account</div>
              <img
                :class="$style.iconChevron"
                alt=""
                src="/icon--chevron.svg"
              />
            </div>
            <div :class="$style.linksContainer">
              <div :class="$style.link5">
                <div :class="$style.label5" @click="onLabelText5Click">
                  <ul :class="$style.user">
                    User
                  </ul>
                </div>
              </div>
              <div :class="$style.link6">
                <div :class="$style.label5" @click="onLabelText6Click">
                  <ul :class="$style.user">
                    Edit Profile
                  </ul>
                </div>
              </div>
              <div :class="$style.line" />
            </div>
          </div>
        </div>
        <img :class="$style.signOutAlt1Icon" alt="" src="/signoutalt-12.svg" />
        <div :class="$style.logout" @click="onLogoutTextClick">Logout</div>
      </div>
    </div>
    <div :class="$style.adminDataUserChild" />
    <div :class="$style.rectangleParent">
      <div :class="$style.frameItem" />
      <div :class="$style.admin1">ADMIN</div>
      <img
        :class="$style.logoSuikaTransformedPrevUiIcon"
        alt=""
        src="/logo-suikatransformed-prev-ui-1@2x.png"
      />
    </div>
  </div>
</template>
<script>
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "AdminDataUser",
    methods: {
      onIconButtonContainerClick() {
        this.$router.push("/admin-tambah-user");
      },
      onLabelTextClick() {
        this.$router.push("/admin-halaman-admin");
      },
      onLabelText1Click() {
        this.$router.push("/admin-data-history");
      },
      onDropdownContainerClick() {
        this.$router.push("/admin-data-inventory");
      },
      onLabelText3Click() {
        const anchor = document.querySelector("[data-scroll-to='rectangle']");
        if (anchor) {
          anchor.scrollIntoView({ block: "start", behavior: "smooth" });
        }
      },
      onLabelText5Click() {
        this.$router.push("/admin-data-user");
      },
      onLabelText6Click() {
        this.$router.push("/admin-profile");
      },
      onLogoutTextClick() {
        this.$router.push("/");
      },
    },
  });
</script>
<style module>
  .frameChild {
    position: absolute;
    top: 134px;
    left: 0px;
    border-radius: var(--br-xl);
    background-color: var(--color-goldenrod);
    width: 1075px;
    height: 68px;
  }
  .frame1 {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 1075px;
    height: 202px;
    overflow: hidden;
  }
  .headingChild {
    position: absolute;
    height: 4%;
    width: 100%;
    top: 96%;
    right: 0%;
    bottom: 0%;
    left: 0%;
    background-color: var(--color-whitesmoke-100);
    border: 1px solid var(--light-border-light);
    box-sizing: border-box;
  }
  .id {
    position: absolute;
    top: 17px;
    left: 39px;
    line-height: 22px;
    font-weight: 500;
  }
  .headingItem {
    position: absolute;
    top: 14px;
    right: 16px;
    width: 12px;
    height: 22px;
  }
  .heading {
    align-self: stretch;
    position: relative;
    background: linear-gradient(#eaeaea, #eaeaea), #fff;
    height: 50px;
    color: var(--light-dark);
    font-family: var(--base-base-primary-bold);
  }
  .div {
    position: absolute;
    top: 14px;
    left: 31px;
    line-height: 22px;
  }
  .titleValueChild {
    position: absolute;
    height: 2.04%;
    width: 100%;
    top: 97.96%;
    right: 0%;
    bottom: 0%;
    left: 0%;
    background-color: var(--light-light);
    border: 1px solid var(--light-light);
    box-sizing: border-box;
  }
  .titleValue {
    align-self: stretch;
    position: relative;
    background-color: var(--light-white);
    height: 49px;
  }
  .titleValueInner {
    position: absolute;
    height: 2.04%;
    width: 100%;
    top: 97.96%;
    right: 0%;
    bottom: 0%;
    left: 0%;
    background-color: var(--color-whitesmoke-100);
    border: 1px solid var(--color-whitesmoke-100);
    box-sizing: border-box;
  }
  .tableColumn {
    position: absolute;
    top: 247px;
    left: 0px;
    background-color: var(--light-white);
    width: 120px;
    height: 537px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  }
  .frame2 {
    position: absolute;
    top: 0px;
    left: 13px;
    width: 120px;
    height: 784px;
    overflow: hidden;
  }
  .userAccount {
    position: absolute;
    top: 148px;
    left: 0px;
    font-weight: 500;
    display: inline-block;
    width: 392px;
  }
  .frame3 {
    position: absolute;
    top: 0px;
    left: 35px;
    width: 392px;
    height: 190px;
    overflow: hidden;
    text-align: left;
    font-size: var(--font-size-17xl);
    color: var(--color-black);
    font-family: var(--base-base-primary-bold);
  }
  .username {
    position: absolute;
    top: 12px;
    left: 54px;
    line-height: 22px;
    font-weight: 500;
  }
  .heading1 {
    align-self: stretch;
    position: relative;
    background: linear-gradient(#eaeaea, #eaeaea), #f7bc39;
    height: 50px;
    color: var(--light-dark);
    font-family: var(--base-base-primary-bold);
  }
  .titleValueChild1 {
    position: relative;
    background-color: var(--light-white);
    width: 172px;
    height: 49px;
    z-index: 0;
  }
  .titleValueChild2 {
    position: relative;
    background-color: var(--light-light);
    border: 1px solid var(--light-light);
    box-sizing: border-box;
    width: 172px;
    height: 1px;
    z-index: 1;
  }
  .div3 {
    position: absolute;
    margin: 0 !important;
    top: 14px;
    left: 66px;
    line-height: 22px;
    z-index: 2;
  }
  .titleValue4 {
    align-self: stretch;
    height: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    position: relative;
    text-align: left;
  }
  .testTitle1 {
    position: absolute;
    top: 14px;
    left: 64px;
    line-height: 22px;
  }
  .tableColumn1 {
    position: absolute;
    top: 247px;
    left: 0px;
    background-color: var(--color-gray-100);
    width: 153px;
    height: 537px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  }
  .frame4 {
    position: absolute;
    top: 0px;
    left: 133px;
    width: 153px;
    height: 784px;
    overflow: hidden;
  }
  .nama {
    position: absolute;
    top: 14px;
    left: 111px;
    line-height: 22px;
    font-weight: 500;
  }
  .lineDiv {
    position: absolute;
    height: 4%;
    width: 100.85%;
    top: 98%;
    right: -0.43%;
    bottom: -2%;
    left: -0.43%;
    border-top: 2px solid var(--light-border-light);
    box-sizing: border-box;
  }
  .heading2 {
    align-self: stretch;
    position: relative;
    background-color: var(--color-whitesmoke-100);
    height: 50px;
    color: var(--light-dark);
    font-family: var(--base-base-primary-bold);
  }
  .loremIpsu {
    position: absolute;
    top: 14px;
    left: 24px;
    line-height: 22px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 128px;
  }
  .dateValueChild {
    position: absolute;
    height: 2%;
    width: 100.43%;
    top: 99%;
    right: -0.21%;
    bottom: -1%;
    left: -0.21%;
    border-top: 1px solid var(--color-whitesmoke-100);
    box-sizing: border-box;
  }
  .dateValue {
    align-self: stretch;
    position: relative;
    background-color: var(--light-white);
    height: 50px;
  }
  .div6 {
    position: absolute;
    top: 14px;
    left: 50px;
    line-height: 22px;
  }
  .div7 {
    position: absolute;
    top: 14px;
    left: 49px;
    line-height: 22px;
  }
  .tableColumn2 {
    position: absolute;
    top: 247px;
    left: 0px;
    background-color: var(--color-gray-100);
    width: 234px;
    height: 536px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  }
  .frame5 {
    position: absolute;
    top: 0px;
    left: 286px;
    width: 234px;
    height: 783px;
    overflow: hidden;
  }
  .password {
    position: absolute;
    top: 14px;
    left: 65px;
    line-height: 22px;
    font-weight: 500;
  }
  .headingChild1 {
    position: absolute;
    height: 4%;
    width: 101.04%;
    top: 98%;
    right: -0.52%;
    bottom: -2%;
    left: -0.52%;
    border-top: 2px solid var(--light-border-light);
    box-sizing: border-box;
  }
  .dateValueChild2 {
    position: absolute;
    height: 2%;
    width: 100.52%;
    top: 99%;
    right: -0.26%;
    bottom: -1%;
    left: -0.26%;
    border-top: 1px solid var(--color-whitesmoke-100);
    box-sizing: border-box;
  }
  .tableColumn3 {
    position: absolute;
    top: 248px;
    left: 0px;
    background-color: var(--color-gray-100);
    width: 192px;
    height: 536px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  }
  .frame6 {
    position: absolute;
    top: 0px;
    left: 520px;
    width: 192px;
    height: 784px;
    overflow: hidden;
  }
  .role {
    position: absolute;
    top: 12px;
    left: 72px;
    line-height: 22px;
    font-weight: 500;
  }
  .tableColumn4 {
    position: absolute;
    top: 248px;
    left: 0px;
    background-color: var(--color-gray-100);
    width: 160px;
    height: 537px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  }
  .frame7 {
    position: absolute;
    top: 0px;
    left: 712px;
    width: 160px;
    height: 785px;
    overflow: hidden;
  }
  .tambah {
    position: relative;
  }
  .component1Icon {
    position: relative;
    width: 24px;
    height: 22.7px;
  }
  .tambahParent {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: var(--gap-3xs);
  }
  .iconButton {
    position: absolute;
    top: 148px;
    left: 0px;
    border-radius: var(--br-xl);
    background-color: var(--color-slateblue);
    box-shadow: var(--small);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: var(--padding-6xs) var(--padding-mini);
    cursor: pointer;
  }
  .frame8 {
    position: absolute;
    top: 0px;
    left: 911px;
    width: 122px;
    height: 184.7px;
    overflow: hidden;
    text-align: left;
    font-size: var(--base-large-size);
    color: var(--light-white);
    font-family: var(--base-base-primary-bold);
  }
  .action {
    position: absolute;
    top: calc(50% - 10px);
    left: calc(50% - 21px);
    line-height: 22px;
    font-weight: 500;
    display: inline-block;
    width: 41px;
    height: 20px;
  }
  .heading5 {
    align-self: stretch;
    position: relative;
    background-color: var(--color-whitesmoke-100);
    height: 50px;
  }
  .actionValueChild {
    align-self: stretch;
    position: absolute;
    margin: 0 !important;
    height: 2%;
    width: 100%;
    top: 98%;
    right: 0%;
    bottom: 0%;
    left: 0%;
    background-color: var(--color-whitesmoke-100);
    border: 1px solid var(--color-whitesmoke-100);
    box-sizing: border-box;
    z-index: 0;
  }
  .actionValueItem {
    align-self: stretch;
    position: absolute;
    margin: 0 !important;
    height: 38%;
    width: 30.91%;
    top: 32%;
    right: 34.55%;
    bottom: 30%;
    left: 34.55%;
    max-width: 100%;
    overflow: hidden;
    max-height: 100%;
    z-index: 1;
  }
  .actionValue {
    align-self: stretch;
    background-color: var(--light-white);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    position: relative;
    gap: var(--gap-3xs);
  }
  .actionValueChild4 {
    position: absolute;
    margin: 0 !important;
    height: 2%;
    width: 100%;
    top: 98%;
    right: 0%;
    bottom: 0%;
    left: 0%;
    background-color: var(--color-whitesmoke-100);
    border: 1px solid var(--color-whitesmoke-100);
    box-sizing: border-box;
    z-index: 0;
  }
  .tableColumn5 {
    position: absolute;
    top: 248px;
    left: 0px;
    background-color: var(--color-gray-100);
    width: 220px;
    height: 536px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  }
  .frame9 {
    position: absolute;
    top: 0px;
    left: 872px;
    width: 220px;
    height: 784px;
    overflow: hidden;
    text-align: left;
    color: var(--light-dark);
    font-family: var(--base-base-primary-bold);
  }
  .frame {
    position: absolute;
    top: 17px;
    left: 309px;
    width: 1092px;
    height: 816px;
    overflow: hidden;
    text-align: center;
    color: var(--light-secondary);
  }
  .sidebarChild {
    position: absolute;
    top: 1.3px;
    left: 0px;
    width: 270px;
    height: 1025px;
  }
  .suika {
    position: absolute;
    height: 11.43%;
    width: 63.35%;
    top: 87.19%;
    left: 32.92%;
    display: inline-block;
  }
  .admin {
    position: absolute;
    top: 190.6px;
    left: 53px;
    font-size: var(--base-body-size);
    font-weight: 500;
    color: var(--color-gold);
    display: inline-block;
    width: 48px;
    height: 19.4px;
  }
  .pexelsPhoto23790041 {
    position: absolute;
    top: -19.4px;
    left: 10px;
    border-radius: var(--br-20xl);
    background-color: var(--color-gold);
    width: 151px;
    height: 187.2px;
  }
  .eiuserIcon {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 161px;
    height: 167.8px;
    overflow: hidden;
  }
  .suikaParent {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0%;
    right: 0%;
    bottom: 0%;
    left: 0%;
  }
  .profile {
    position: absolute;
    height: 20.49%;
    width: 59.63%;
    top: 8.67%;
    right: 24.07%;
    bottom: 70.84%;
    left: 16.3%;
  }
  .overline {
    position: relative;
    letter-spacing: 0.4px;
    line-height: 12px;
    text-transform: uppercase;
    font-weight: 500;
  }
  .title {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px var(--padding-xs);
  }
  .iconHomeSimpleDoor {
    position: relative;
    width: 20px;
    height: 20px;
    overflow: hidden;
    flex-shrink: 0;
  }
  .label {
    flex: 1;
    position: relative;
    letter-spacing: -0.02em;
    line-height: 20px;
    font-weight: 500;
    cursor: pointer;
  }
  .link {
    align-self: stretch;
    border-radius: var(--br-5xs);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    padding: var(--padding-3xs) var(--padding-xs);
    gap: var(--gap-xs);
  }
  .materialSymbolspersonSearchIcon {
    position: relative;
    width: 20px;
    height: 21px;
    overflow: hidden;
    flex-shrink: 0;
  }
  .label2 {
    flex: 1;
    position: relative;
    letter-spacing: -0.02em;
    line-height: 20px;
    font-weight: 500;
  }
  .link2 {
    align-self: stretch;
    border-radius: var(--br-5xs);
    background-color: var(--color-gold);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    padding: var(--padding-3xs) var(--padding-xs);
    gap: var(--gap-xs);
  }
  .dropdown {
    align-self: stretch;
    height: 40px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-start;
    cursor: pointer;
  }
  .iconChevron {
    position: relative;
    width: 16px;
    height: 16px;
    overflow: hidden;
    flex-shrink: 0;
  }
  .user {
    margin: 0;
    padding-left: var(--padding-base);
  }
  .label5 {
    flex: 1;
    position: relative;
    letter-spacing: -0.02em;
    line-height: 16px;
    font-weight: 500;
    cursor: pointer;
  }
  .link5 {
    border-radius: var(--br-5xs);
    width: 172px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    padding: var(--padding-5xs) var(--padding-xs);
    box-sizing: border-box;
    z-index: 0;
  }
  .link6 {
    border-radius: var(--br-5xs);
    background-color: var(--color-gold);
    width: 172px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    padding: var(--padding-5xs) var(--padding-xs);
    box-sizing: border-box;
    z-index: 1;
  }
  .line {
    position: absolute;
    margin: 0 !important;
    height: 100%;
    top: 0%;
    bottom: 0%;
    left: -13px;
    background-color: var(--color-gainsboro-200);
    width: 2px;
    z-index: 2;
  }
  .linksContainer {
    width: 189px;
    height: 104px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    position: relative;
    gap: var(--gap-9xs);
    font-size: var(--font-inherit);
    font-family: var(--font-inherit);
  }
  .dropdown1 {
    align-self: stretch;
    height: 156px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-start;
    gap: var(--gap-xs);
  }
  .navigation {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 256px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-5xl) var(--padding-5xl) 0px;
    box-sizing: border-box;
    gap: var(--gap-5xs);
  }
  .signOutAlt1Icon {
    position: absolute;
    top: 483.1px;
    left: 130px;
    width: 17px;
    height: 15.6px;
    overflow: hidden;
  }
  .logout {
    position: absolute;
    top: 481.3px;
    left: 56px;
    font-weight: 500;
    font-family: var(--font-montserrat);
    display: inline-block;
    width: 51px;
    height: 15.6px;
    cursor: pointer;
  }
  .navigationParent {
    position: absolute;
    top: 298.7px;
    left: 7px;
    width: 256px;
    height: 498.8px;
    font-size: var(--base-body-size);
    font-family: var(--font-inter);
  }
  .sidebar {
    position: absolute;
    top: -1.3px;
    left: 0px;
    width: 270px;
    height: 1025px;
    font-size: var(--font-size-mid);
    font-family: var(--font-montserrat);
  }
  .adminDataUserChild {
    position: absolute;
    top: 0px;
    left: 270px;
    background-color: var(--color-orange);
    width: 1170px;
    height: 68px;
  }
  .frameItem {
    position: absolute;
    top: 8px;
    left: 4px;
    background-color: var(--color-orange);
    border-right: 1px solid var(--color-gainsboro-100);
    border-bottom: 1px solid var(--color-gainsboro-100);
    box-sizing: border-box;
    width: 273px;
    height: 68.8px;
  }
  .admin1 {
    position: absolute;
    top: 27.5px;
    left: 91px;
    font-weight: 800;
    display: inline-block;
    width: 77.8px;
    height: 32.1px;
  }
  .logoSuikaTransformedPrevUiIcon {
    position: absolute;
    top: 8px;
    left: 4px;
    border-radius: var(--br-123xl);
    width: 88px;
    height: 83.7px;
    object-fit: cover;
  }
  .rectangleParent {
    position: absolute;
    height: 8.2%;
    width: 19.03%;
    top: -0.78%;
    right: 81.25%;
    bottom: 92.58%;
    left: -0.28%;
    font-size: var(--font-size-5xl);
    font-family: var(--base-base-primary-bold);
  }
  .adminDataUser {
    position: relative;
    background-color: var(--light-white);
    width: 100%;
    height: 1024px;
    overflow: hidden;
    text-align: left;
    font-size: var(--base-body-size);
    color: var(--color-black);
    font-family: var(--base-body);
  }
</style>
