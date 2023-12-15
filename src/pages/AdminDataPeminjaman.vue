<template>
  <div :class="$style.adminDataPeminjaman">
    <div :class="$style.header">
      <div :class="$style.headerChild" />
      <div :class="$style.sidebar">
        <img
          :class="$style.sidebarChild"
          alt=""
          src="/rectangle-23.svg"
          data-scroll-to="rectangle"
        />
        <div :class="$style.suikaParent">
          <b :class="$style.suika">SUIKA</b>
          <div :class="$style.pexelsPhoto23790041" />
          <img :class="$style.eiuserIcon" alt="" src="/eiuser3.svg" />
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
              <div :class="$style.label" @click="onLabelTextClick">
                Dashboard
              </div>
            </div>
            <div :class="$style.link">
              <img
                :class="$style.materialSymbolspersonSearchIcon"
                alt=""
                src="/materialsymbolspersonsearch.svg"
              />
              <div :class="$style.label" @click="onLabelText1Click">
                History
              </div>
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
          <img
            :class="$style.signOutAlt1Icon"
            alt=""
            src="/signoutalt-12.svg"
          />
          <div :class="$style.logout" @click="onLogoutTextClick">Logout</div>
        </div>
      </div>
    </div>
    <div :class="$style.adminDataPeminjamanChild" />
    <div :class="$style.dataPeminjaman">Data Peminjaman</div>
    <div :class="$style.tableColumn">
      <div :class="$style.heading">
        <div :class="$style.headingChild" />
        <div :class="$style.action">Action</div>
      </div>
      <div :class="$style.actionValue">
        <div :class="$style.actionValueChild" />
        <img :class="$style.trash1Icon" alt="" src="/trash-1.svg" />
      </div>
      <div :class="$style.actionValue">
        <div :class="$style.actionValueChild" />
        <img :class="$style.trash1Icon" alt="" src="/trash-1.svg" />
      </div>
      <div :class="$style.actionValue">
        <div :class="$style.actionValueChild" />
        <img :class="$style.trash1Icon" alt="" src="/trash-1.svg" />
      </div>
      <div :class="$style.actionValue">
        <div :class="$style.actionValueChild" />
        <img :class="$style.trash1Icon" alt="" src="/trash-1.svg" />
      </div>
    </div>
    <div :class="$style.tableColumn1">
      <div :class="$style.heading1">
        <div :class="$style.dataEnd">Data End</div>
        <div :class="$style.headingItem" />
      </div>
      <div :class="$style.dateValue">
        <div :class="$style.div">23-12-2023</div>
        <div :class="$style.dateValueChild" />
      </div>
      <div :class="$style.dateValue">
        <div :class="$style.div1">120002</div>
        <div :class="$style.dateValueChild" />
      </div>
      <div :class="$style.dateValue">
        <div :class="$style.div2">120005</div>
        <div :class="$style.dateValueChild" />
      </div>
      <div :class="$style.dateValue">
        <div :class="$style.div2">120004</div>
        <div :class="$style.dateValueChild" />
      </div>
    </div>
    <div :class="$style.tableColumn2">
      <div :class="$style.heading2">
        <div :class="$style.headingChild" />
        <div :class="$style.inventoryId">Inventory ID</div>
        <div :class="$style.antDesigncaretDownFilled" />
      </div>
      <div :class="$style.titleValue">
        <div :class="$style.testTitle">20003</div>
        <div :class="$style.titleValueChild" />
      </div>
      <div :class="$style.titleValue">
        <div :class="$style.testTitle">20004</div>
        <div :class="$style.titleValueItem" />
      </div>
      <div :class="$style.titleValue">
        <div :class="$style.testTitle">20005</div>
        <div :class="$style.titleValueItem" />
      </div>
      <div :class="$style.titleValue">
        <div :class="$style.testTitle">20006</div>
        <div :class="$style.titleValueChild" />
      </div>
    </div>
    <div :class="$style.tableColumn3">
      <div :class="$style.heading1">
        <div :class="$style.dataStart">Data Start</div>
        <div :class="$style.headingChild1" />
      </div>
      <div :class="$style.dateValue">
        <div :class="$style.div">LOREM ipsu</div>
        <div :class="$style.dateValueChild1" />
      </div>
      <div :class="$style.dateValue">
        <div :class="$style.div1">120002</div>
        <div :class="$style.dateValueChild1" />
      </div>
      <div :class="$style.dateValue">
        <div :class="$style.div2">120005</div>
        <div :class="$style.dateValueChild1" />
      </div>
      <div :class="$style.dateValue">
        <div :class="$style.div2">120004</div>
        <div :class="$style.dateValueChild1" />
      </div>
    </div>
    <div :class="$style.tableColumn4">
      <div :class="$style.heading4">
        <div :class="$style.headingChild" />
        <div :class="$style.validasi">Validasi</div>
      </div>
      <div :class="$style.actionValueParent">
        <div :class="$style.actionValue4">
          <div :class="$style.actionValueChild1" />
          <div :class="$style.actionValueChild2" />
        </div>
        <div :class="$style.iconButton">
          <div :class="$style.disetujuiWrapper">
            <div :class="$style.disetujui">Disetujui</div>
          </div>
        </div>
      </div>
      <div :class="$style.actionValueParent">
        <div :class="$style.actionValue5">
          <div :class="$style.actionValueChild1" />
          <div :class="$style.actionValueChild2" />
        </div>
        <div :class="$style.iconButton1">
          <div :class="$style.disetujuiWrapper">
            <div :class="$style.disetujui">Disetujui</div>
          </div>
        </div>
      </div>
      <div :class="$style.actionValueParent">
        <div :class="$style.actionValue4">
          <div :class="$style.actionValueChild1" />
          <div :class="$style.actionValueChild2" />
        </div>
        <div :class="$style.iconButton2">
          <div :class="$style.disetujuiWrapper">
            <div :class="$style.disetujui">Ditolak</div>
          </div>
        </div>
      </div>
      <div :class="$style.actionValueParent">
        <div :class="$style.actionValue5">
          <div :class="$style.actionValueChild1" />
          <div :class="$style.actionValueChild8" />
        </div>
        <div :class="$style.iconButton3">
          <div :class="$style.disetujuiWrapper">
            <div :class="$style.disetujui">Disetujui</div>
          </div>
        </div>
        <div :class="$style.iconButton4">
          <div :class="$style.disetujuiWrapper">
            <div :class="$style.disetujui">Ditolak</div>
          </div>
        </div>
      </div>
    </div>
    <div :class="$style.tableColumn5">
      <div :class="$style.heading1">
        <div :class="$style.headingChild" />
        <div :class="$style.idPeminjaman">ID Peminjaman</div>
        <img :class="$style.groupIcon" alt="" src="/group-2061.svg" />
      </div>
      <div :class="$style.titleValue">
        <div :class="$style.div4">1002</div>
        <div :class="$style.titleValueItem" />
      </div>
      <div :class="$style.titleValue">
        <div :class="$style.div4">1002</div>
        <div :class="$style.titleValueItem" />
      </div>
      <div :class="$style.titleValue">
        <div :class="$style.div4">1003</div>
        <div :class="$style.titleValueChild" />
      </div>
      <div :class="$style.titleValue">
        <div :class="$style.div4">1004</div>
        <div :class="$style.titleValueItem" />
      </div>
    </div>
    <div :class="$style.rectangleParent">
      <div :class="$style.frameChild" />
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
    name: "AdminDataPeminjaman",
    methods: {
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
  .headerChild {
    position: absolute;
    top: 0px;
    left: 270px;
    background-color: var(--color-orange);
    width: 1170px;
    height: 68px;
  }
  .sidebarChild {
    position: absolute;
    top: 1px;
    left: 0px;
    width: 270px;
    height: 1025px;
  }
  .suika {
    position: absolute;
    height: 11.43%;
    width: 63.35%;
    top: 86.24%;
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
    height: 508.4px;
    font-size: var(--base-body-size);
    font-family: var(--font-inter);
  }
  .sidebar {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 270px;
    height: 1025px;
  }
  .header {
    position: absolute;
    top: -1px;
    left: 0px;
    width: 1440px;
    height: 1025px;
    font-size: var(--font-size-mid);
    color: var(--color-black);
    font-family: var(--font-montserrat);
  }
  .adminDataPeminjamanChild {
    position: absolute;
    top: 124px;
    left: 298px;
    border-radius: var(--br-xl);
    background-color: var(--color-orange);
    width: 1075px;
    height: 68px;
  }
  .dataPeminjaman {
    position: absolute;
    top: 138px;
    left: 333px;
    font-size: var(--font-size-17xl);
    font-weight: 500;
    color: var(--color-black);
    display: inline-block;
    width: 392px;
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
  .action {
    position: absolute;
    top: calc(50% - 10px);
    left: calc(50% - 20.5px);
    line-height: 22px;
    font-weight: 500;
    display: inline-block;
    width: 41px;
    height: 20px;
  }
  .heading {
    align-self: stretch;
    position: relative;
    background: linear-gradient(#eaeaea, #eaeaea), #555050;
    height: 50px;
  }
  .actionValueChild {
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
  .trash1Icon {
    position: absolute;
    margin: 0 !important;
    height: 36%;
    width: 7.29%;
    top: 32%;
    right: 42.43%;
    bottom: 32%;
    left: 50.28%;
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
  .tableColumn {
    position: absolute;
    top: 241px;
    left: 1194px;
    width: 181px;
    height: 546px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    color: var(--light-dark);
  }
  .dataEnd {
    position: absolute;
    top: 14px;
    left: 102px;
    line-height: 22px;
    font-weight: 500;
  }
  .headingItem {
    position: absolute;
    height: 4%;
    width: 101.16%;
    top: 98%;
    right: -0.58%;
    bottom: -2%;
    left: -0.58%;
    border-top: 2px solid var(--light-border-light);
    box-sizing: border-box;
  }
  .heading1 {
    align-self: stretch;
    position: relative;
    background-color: var(--color-whitesmoke-100);
    height: 50px;
    color: var(--light-dark);
    font-family: var(--base-base-primary-bold);
  }
  .div {
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
    width: 100.58%;
    top: 99%;
    right: -0.29%;
    bottom: -1%;
    left: -0.29%;
    border-top: 1px solid var(--color-whitesmoke-100);
    box-sizing: border-box;
  }
  .dateValue {
    align-self: stretch;
    position: relative;
    background-color: var(--light-white);
    height: 50px;
  }
  .div1 {
    position: absolute;
    top: 14px;
    left: 50px;
    line-height: 22px;
  }
  .div2 {
    position: absolute;
    top: 14px;
    left: 49px;
    line-height: 22px;
  }
  .tableColumn1 {
    position: absolute;
    top: 241px;
    left: 779px;
    width: 172px;
    height: 564px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    text-align: center;
    font-family: var(--base-body);
  }
  .inventoryId {
    position: absolute;
    top: 12px;
    left: 11px;
    line-height: 22px;
    font-weight: 500;
  }
  .antDesigncaretDownFilled {
    position: absolute;
    top: 26px;
    right: 16px;
    width: 12px;
    height: 12px;
    overflow: hidden;
  }
  .heading2 {
    position: relative;
    background: linear-gradient(#eaeaea, #eaeaea), #eaeaea;
    width: 136px;
    height: 50px;
    color: var(--light-dark);
    font-family: var(--base-base-primary-bold);
  }
  .testTitle {
    position: absolute;
    top: 14px;
    left: 64px;
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
    background-color: var(--color-whitesmoke-100);
    border: 1px solid var(--color-whitesmoke-100);
    box-sizing: border-box;
  }
  .titleValue {
    align-self: stretch;
    position: relative;
    background-color: var(--light-white);
    height: 49px;
  }
  .titleValueItem {
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
  .tableColumn2 {
    position: absolute;
    top: 240px;
    left: 448px;
    width: 136px;
    height: 562px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    text-align: center;
    font-family: var(--base-body);
  }
  .dataStart {
    position: absolute;
    top: 14px;
    left: 98px;
    line-height: 22px;
    font-weight: 500;
  }
  .headingChild1 {
    position: absolute;
    height: 4%;
    width: 101.03%;
    top: 98%;
    right: -0.51%;
    bottom: -2%;
    left: -0.51%;
    border-top: 2px solid var(--light-border-light);
    box-sizing: border-box;
  }
  .dateValueChild1 {
    position: absolute;
    height: 2%;
    width: 100.51%;
    top: 99%;
    right: -0.26%;
    bottom: -1%;
    left: -0.26%;
    border-top: 1px solid var(--color-whitesmoke-100);
    box-sizing: border-box;
  }
  .tableColumn3 {
    position: absolute;
    top: 240px;
    left: 584px;
    width: 195px;
    height: 564px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    text-align: center;
    font-family: var(--base-body);
  }
  .validasi {
    position: absolute;
    top: calc(50% - 10px);
    left: calc(50% - 15px);
    line-height: 22px;
    font-weight: 500;
    display: inline-block;
    width: 102px;
    height: 20px;
  }
  .heading4 {
    align-self: stretch;
    position: relative;
    background-color: var(--color-whitesmoke-100);
    height: 50px;
    font-size: var(--base-body-size);
    color: var(--light-dark);
  }
  .actionValueChild1 {
    align-self: stretch;
    position: relative;
    background-color: var(--light-white);
    height: 50px;
    z-index: 0;
  }
  .actionValueChild2 {
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
    z-index: 1;
  }
  .actionValue4 {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 243px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-3xs);
  }
  .disetujui {
    position: relative;
  }
  .disetujuiWrapper {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
  .iconButton {
    position: absolute;
    top: 8px;
    left: 82.4px;
    border-radius: var(--br-xl);
    background-color: var(--color-slateblue);
    box-shadow: var(--small);
    width: 96.1px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: var(--padding-6xs) var(--padding-mini);
    box-sizing: border-box;
  }
  .actionValueParent {
    align-self: stretch;
    position: relative;
    height: 50px;
  }
  .actionValue5 {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 244px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-3xs);
  }
  .iconButton1 {
    position: absolute;
    top: 8px;
    left: 81.9px;
    border-radius: var(--br-xl);
    background-color: var(--color-slateblue);
    box-shadow: var(--small);
    width: 96.5px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: var(--padding-6xs) var(--padding-mini);
    box-sizing: border-box;
  }
  .iconButton2 {
    position: absolute;
    top: 9px;
    left: 82.4px;
    border-radius: var(--br-xl);
    background-color: var(--color-red-200);
    box-shadow: var(--small);
    width: 97.2px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: var(--padding-6xs) var(--padding-mini);
    box-sizing: border-box;
  }
  .actionValueChild8 {
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
    z-index: 1;
  }
  .iconButton3 {
    position: absolute;
    top: 9px;
    left: 13.1px;
    border-radius: var(--br-xl);
    background-color: var(--color-slateblue);
    box-shadow: var(--small);
    width: 96.5px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: var(--padding-6xs) var(--padding-mini);
    box-sizing: border-box;
  }
  .iconButton4 {
    position: absolute;
    top: 9px;
    left: 115px;
    border-radius: var(--br-xl);
    background-color: var(--color-red-200);
    box-shadow: var(--small);
    width: 96.5px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: var(--padding-6xs) var(--padding-mini);
    box-sizing: border-box;
  }
  .tableColumn4 {
    position: absolute;
    top: 241px;
    left: 951px;
    width: 244px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    font-size: var(--base-large-size);
    color: var(--light-white);
  }
  .idPeminjaman {
    position: absolute;
    top: 17px;
    left: 13px;
    line-height: 22px;
    font-weight: 500;
  }
  .groupIcon {
    position: absolute;
    top: 14px;
    right: 16px;
    width: 12px;
    height: 22px;
  }
  .div4 {
    position: absolute;
    top: 14px;
    left: 31px;
    line-height: 22px;
  }
  .tableColumn5 {
    position: absolute;
    top: 240px;
    left: 311px;
    width: 137px;
    height: 562px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    text-align: center;
    font-family: var(--base-body);
  }
  .frameChild {
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
    top: 9px;
    left: 3px;
    border-radius: var(--br-123xl);
    width: 88px;
    height: 83.7px;
    object-fit: cover;
  }
  .rectangleParent {
    position: absolute;
    top: -9px;
    left: -3px;
    width: 277px;
    height: 83.7px;
    font-size: var(--font-size-5xl);
    color: var(--color-black);
  }
  .adminDataPeminjaman {
    position: relative;
    background-color: var(--light-white);
    width: 100%;
    height: 1024px;
    overflow: hidden;
    text-align: left;
    font-size: var(--base-body-size);
    color: var(--light-secondary);
    font-family: var(--base-base-primary-bold);
  }
</style>
