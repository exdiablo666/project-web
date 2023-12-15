<template>
  <div :class="$style.userDataPeminjaman">
    <div :class="$style.sidebar">
      <img :class="$style.sidebarChild" alt="" src="/rectangle-2.svg" />
      <div :class="$style.suikaParent">
        <b :class="$style.suika">USER</b>
        <div :class="$style.pexelsPhoto23790041" />
        <img :class="$style.eiuserIcon" alt="" src="/eiuser.svg" />
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
          <div :class="$style.link">
            <img
              :class="$style.iconHomeSimpleDoor"
              alt=""
              src="/icon--page.svg"
            />
            <div :class="$style.label" @click="onLabelText2Click">
              Peminjaman
            </div>
          </div>
          <div :class="$style.dropdown">
            <div :class="$style.link3">
              <img
                :class="$style.iconHomeSimpleDoor"
                alt=""
                src="/icon--user-1.svg"
              />
              <div :class="$style.label" @click="onLabelText3Click">
                Account
              </div>
            </div>
          </div>
        </div>
        <img :class="$style.signOutAlt1Icon" alt="" src="/signoutalt-1.svg" />
        <div :class="$style.logout">Logout</div>
      </div>
    </div>
    <div :class="$style.header">
      <div :class="$style.headerChild" />
    </div>
    <div :class="$style.rectangleParent">
      <div :class="$style.groupChild" />
      <div :class="$style.user">User</div>
      <img
        :class="$style.logoSuikaTransformedPrevUiIcon"
        alt=""
        src="/logo-suikatransformed-prev-ui-1@2x.png"
      />
    </div>
    <div :class="$style.userDataPeminjamanChild" />
    <div :class="$style.iconButton" @click="onIconButtonContainerClick">
      <div :class="$style.tambahParent">
        <div :class="$style.tambah">Tambah</div>
        <img :class="$style.component1Icon" alt="" src="/component-1.svg" />
      </div>
    </div>
    <div :class="$style.dataPeminjaman">Data Peminjaman</div>
    <div :class="$style.tableColumn">
      <div :class="$style.heading">
        <div :class="$style.headingChild" />
        <div :class="$style.dataEnd">Data End</div>
        <div :class="$style.headingItem" />
      </div>
      <div :class="$style.dateValue">
        <div :class="$style.dateValueChild" />
        <div :class="$style.desember2023">18 Desember 2023</div>
        <div :class="$style.dateValueItem" />
      </div>
      <div :class="$style.dateValue">
        <div :class="$style.dateValueChild" />
        <div :class="$style.desember20231">18 Desember 2023</div>
        <div :class="$style.dateValueItem" />
      </div>
      <div :class="$style.dateValue">
        <div :class="$style.dateValueChild" />
        <div :class="$style.desember20232">12 Desember 2023</div>
        <div :class="$style.dateValueItem" />
      </div>
    </div>
    <div :class="$style.tableColumn1">
      <div :class="$style.heading1">
        <div :class="$style.headingChild" />
        <div :class="$style.headingChild1" />
        <div :class="$style.nama">Nama</div>
        <div :class="$style.antDesigncaretDownFilledWrapper">
          <div :class="$style.antDesigncaretDownFilled" />
        </div>
      </div>
      <div :class="$style.dateValue">
        <div :class="$style.titleValueChild" />
        <div :class="$style.ruangMeetingSawitsariContainer">
          <span :class="$style.ruangMeetingSawitsariContainer1">
            <p :class="$style.ruangMeeting">Ruang Meeting</p>
            <p :class="$style.ruangMeeting">Sawitsari 1</p>
          </span>
        </div>
        <div :class="$style.titleValueItem" />
      </div>
      <div :class="$style.dateValue">
        <div :class="$style.titleValueInner" />
        <div :class="$style.toyotaAvanza">Toyota Avanza</div>
        <div :class="$style.titleValueChild1" />
      </div>
      <div :class="$style.dateValue">
        <div :class="$style.titleValueInner" />
        <div :class="$style.sonyAlphaA7">Sony Alpha A7 III</div>
        <div :class="$style.titleValueChild1" />
      </div>
    </div>
    <div :class="$style.tableColumn2">
      <div :class="$style.heading">
        <div :class="$style.headingChild" />
        <div :class="$style.dataStart">Data Start</div>
        <div :class="$style.headingChild3" />
      </div>
      <div :class="$style.dateValue">
        <div :class="$style.dateValueChild" />
        <div :class="$style.desember20233">15 Desember 2023</div>
        <div :class="$style.dateValueChild3" />
      </div>
      <div :class="$style.dateValue">
        <div :class="$style.dateValueChild" />
        <div :class="$style.desember20233">15 Desember 2023</div>
        <div :class="$style.dateValueChild3" />
      </div>
      <div :class="$style.dateValue">
        <div :class="$style.dateValueChild" />
        <div :class="$style.desember20233">10 Desember 2023</div>
        <div :class="$style.dateValueChild3" />
      </div>
    </div>
    <div :class="$style.tableColumn3">
      <div :class="$style.heading3">
        <div :class="$style.headingChild" />
        <div :class="$style.headingChild1" />
        <div :class="$style.idPeminjaman">ID Peminjaman</div>
        <img :class="$style.groupIcon" alt="" src="/group-2062.svg" />
      </div>
      <div :class="$style.dateValue">
        <div :class="$style.titleValueInner" />
        <div :class="$style.div">1</div>
        <div :class="$style.titleValueChild1" />
      </div>
      <div :class="$style.dateValue">
        <div :class="$style.titleValueInner" />
        <div :class="$style.div1">2</div>
        <div :class="$style.titleValueChild1" />
      </div>
      <div :class="$style.titleValue5">
        <div :class="$style.titleValueChild8" />
        <div :class="$style.div2">3</div>
        <div :class="$style.titleValueChild9" />
      </div>
    </div>
    <div :class="$style.tableColumn4">
      <div :class="$style.heading">
        <div :class="$style.headingChild" />
        <div :class="$style.deskripsi">Deskripsi</div>
        <div :class="$style.headingChild7" />
      </div>
      <div :class="$style.dateValue">
        <div :class="$style.dateValueChild" />
        <div :class="$style.untukAcaraRapat">Untuk acara Rapat</div>
        <div :class="$style.dateValueChild9" />
      </div>
      <div :class="$style.dateValue">
        <div :class="$style.dateValueChild" />
        <div :class="$style.untukAcaraRapat">Untuk acara Kantor</div>
        <div :class="$style.dateValueChild9" />
      </div>
      <div :class="$style.dateValue">
        <div :class="$style.dateValueChild" />
        <div :class="$style.untukAcaraRapat">untuk dokumentasi</div>
        <div :class="$style.dateValueChild9" />
      </div>
    </div>
    <div :class="$style.tableColumn5">
      <div :class="$style.heading3">
        <div :class="$style.headingChild" />
        <div :class="$style.status">Status</div>
        <div :class="$style.headingChild9" />
      </div>
      <div :class="$style.dateValue">
        <div :class="$style.dateValueChild" />
        <div :class="$style.dateValueItem" />
        <div :class="$style.menunggu">Menunggu</div>
        <img :class="$style.vectorIcon" alt="" src="/vector.svg" />
      </div>
      <div :class="$style.dateValue10">
        <div :class="$style.dateValueChild" />
        <div :class="$style.disetujui">Disetujui</div>
        <div :class="$style.dateValueItem" />
        <img :class="$style.vectorIcon1" alt="" src="/vector1.svg" />
      </div>
      <div :class="$style.dateValue10">
        <div :class="$style.dateValueChild" />
        <div :class="$style.dateValueItem" />
        <div :class="$style.disetujui1">Disetujui</div>
        <img :class="$style.vectorIcon2" alt="" src="/vector1.svg" />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "UserDataPeminjaman",
    methods: {
      onLabelTextClick() {
        this.$router.push("/");
      },
      onLabelText1Click() {
        this.$router.push("/user-data-history");
      },
      onLabelText2Click() {
        this.$router.push("/user-data-peminjaman");
      },
      onLabelText3Click() {
        this.$router.push("/user-profile");
      },
      onIconButtonContainerClick() {
        // Please sync "User- Tambah Peminjaman" to the project
      },
    },
  });
</script>
<style module>
  .sidebarChild {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 270px;
    height: 1032px;
  }
  .suika {
    position: absolute;
    height: 11.3%;
    width: 34.16%;
    top: 88.7%;
    left: 32.92%;
    display: inline-block;
  }
  .pexelsPhoto23790041 {
    position: absolute;
    top: -19.8px;
    left: 10px;
    border-radius: var(--br-20xl);
    background-color: var(--color-gold);
    width: 151px;
    height: 186.5px;
  }
  .eiuserIcon {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 161px;
    height: 152px;
    overflow: hidden;
  }
  .suikaParent {
    position: absolute;
    height: 20.7%;
    width: 59.63%;
    top: 8.74%;
    right: 24.07%;
    bottom: 70.56%;
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
  .link3 {
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
    height: 156px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-start;
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
    top: 364.8px;
    left: 120px;
    width: 17px;
    height: 15.6px;
    overflow: hidden;
  }
  .logout {
    position: absolute;
    top: 363px;
    left: 46px;
    font-weight: 500;
    font-family: var(--font-montserrat);
    display: inline-block;
    width: 51px;
    height: 15.6px;
  }
  .navigationParent {
    position: absolute;
    top: 298px;
    left: 7px;
    width: 256px;
    height: 400px;
    font-size: var(--base-body-size);
    font-family: var(--font-inter);
  }
  .sidebar {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 270px;
    height: 1018px;
    font-size: var(--font-size-mid);
    color: var(--color-black);
    font-family: var(--font-montserrat);
  }
  .headerChild {
    position: absolute;
    top: 0px;
    left: 0px;
    background-color: var(--color-orange);
    width: 1170px;
    height: 68px;
  }
  .header {
    position: absolute;
    top: -2px;
    left: 270px;
    width: 1170px;
    height: 68px;
  }
  .groupChild {
    position: absolute;
    top: 0px;
    left: 0px;
    background-color: var(--color-orange);
    border-right: 1px solid var(--color-gainsboro-100);
    border-bottom: 1px solid var(--color-gainsboro-100);
    box-sizing: border-box;
    width: 270px;
    height: 66px;
  }
  .user {
    position: absolute;
    top: 21.7px;
    left: 90px;
    font-weight: 800;
    display: inline-block;
    width: 77px;
    height: 25.3px;
  }
  .logoSuikaTransformedPrevUiIcon {
    position: absolute;
    top: 0px;
    left: 0px;
    border-radius: var(--br-123xl);
    width: 87px;
    height: 66px;
    object-fit: cover;
  }
  .rectangleParent {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 270px;
    height: 66px;
    font-size: var(--font-size-5xl);
    color: var(--color-black);
    font-family: var(--base-body-bold);
  }
  .userDataPeminjamanChild {
    position: absolute;
    top: 124px;
    left: 298px;
    border-radius: var(--br-xl);
    background-color: var(--color-orange);
    width: 1075px;
    height: 68px;
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
    gap: 10px;
  }
  .iconButton {
    position: absolute;
    top: 138px;
    left: 1209px;
    border-radius: var(--br-xl);
    background-color: #233eae;
    box-shadow: var(--small);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 7px 15px;
    cursor: pointer;
    font-size: var(--base-large-size);
    color: var(--light-white);
    font-family: var(--base-body-bold);
  }
  .dataPeminjaman {
    position: absolute;
    top: 138px;
    left: 333px;
    font-size: var(--font-size-17xl);
    font-weight: 500;
    font-family: var(--base-body-bold);
    color: var(--color-black);
    display: inline-block;
    width: 392px;
  }
  .headingChild {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0%;
    right: 0%;
    bottom: 0%;
    left: 0%;
    background-color: var(--color-whitesmoke-100);
  }
  .dataEnd {
    position: absolute;
    top: 14px;
    left: 0px;
    line-height: 22px;
    font-weight: 500;
    display: inline-block;
    width: 155px;
  }
  .headingItem {
    position: absolute;
    height: 4%;
    width: 101.29%;
    top: 98%;
    right: -0.65%;
    bottom: -2%;
    left: -0.65%;
    border-top: 2px solid var(--light-border-light);
    box-sizing: border-box;
  }
  .heading {
    align-self: stretch;
    position: relative;
    height: 50px;
    text-align: center;
    color: var(--light-dark);
    font-family: var(--base-body-bold);
  }
  .dateValueChild {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0%;
    right: 0%;
    bottom: 0%;
    left: 0%;
    background-color: var(--light-white);
  }
  .desember2023 {
    position: absolute;
    top: 0px;
    left: 0px;
    line-height: 22px;
    display: flex;
    align-items: center;
    width: 152px;
    height: 50px;
  }
  .dateValueItem {
    position: absolute;
    height: 2%;
    width: 100.65%;
    top: 99%;
    right: -0.32%;
    bottom: -1%;
    left: -0.32%;
    border-top: 1px solid var(--color-whitesmoke-100);
    box-sizing: border-box;
  }
  .dateValue {
    align-self: stretch;
    position: relative;
    height: 50px;
  }
  .desember20231 {
    position: absolute;
    top: 3px;
    left: 0px;
    line-height: 22px;
    display: flex;
    align-items: center;
    width: 141px;
    height: 47px;
  }
  .desember20232 {
    position: absolute;
    top: 0px;
    left: 0px;
    line-height: 22px;
    display: flex;
    align-items: center;
    width: 155px;
    height: 50px;
  }
  .tableColumn {
    position: absolute;
    top: 228px;
    left: 804px;
    width: 155px;
    height: 533px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  }
  .headingChild1 {
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
  .nama {
    position: absolute;
    top: 15px;
    left: 0px;
    line-height: 22px;
    font-weight: 500;
    display: inline-block;
    width: 175px;
  }
  .antDesigncaretDownFilled {
    position: absolute;
    top: 12px;
    right: 0px;
    width: 12px;
    height: 12px;
    overflow: hidden;
  }
  .antDesigncaretDownFilledWrapper {
    position: absolute;
    top: 14px;
    right: 16px;
    width: 12px;
    height: 12px;
  }
  .heading1 {
    position: relative;
    background-color: var(--color-whitesmoke-100);
    width: 175px;
    height: 50px;
    text-align: center;
    color: var(--light-dark);
    font-family: var(--base-body-bold);
  }
  .titleValueChild {
    position: absolute;
    height: 98%;
    width: 100.57%;
    top: 0%;
    right: -0.57%;
    bottom: 2%;
    left: 0%;
    background-color: var(--light-white);
  }
  .ruangMeeting {
    margin: 0;
  }
  .ruangMeetingSawitsariContainer1 {
    line-break: anywhere;
    width: 100%;
  }
  .ruangMeetingSawitsariContainer {
    position: absolute;
    top: 0px;
    left: 0px;
    line-height: 22px;
    display: flex;
    align-items: center;
    width: 175px;
    height: 49px;
  }
  .titleValueItem {
    position: absolute;
    height: 2%;
    width: 100%;
    top: 98%;
    right: 0%;
    bottom: 0%;
    left: 0%;
    background-color: var(--color-whitesmoke-100);
    border: 1px solid var(--color-whitesmoke-100);
    box-sizing: border-box;
  }
  .titleValueInner {
    position: absolute;
    height: 98%;
    width: 100%;
    top: 0%;
    right: 0%;
    bottom: 2%;
    left: 0%;
    background-color: var(--light-white);
  }
  .toyotaAvanza {
    position: absolute;
    top: 3px;
    left: 0px;
    line-height: 22px;
    display: flex;
    align-items: center;
    width: 138px;
    height: 47px;
  }
  .titleValueChild1 {
    position: absolute;
    height: 2%;
    width: 100%;
    top: 98%;
    right: 0%;
    bottom: 0%;
    left: 0%;
    background-color: var(--light-light);
    border: 1px solid var(--light-light);
    box-sizing: border-box;
  }
  .sonyAlphaA7 {
    position: absolute;
    top: 10px;
    left: 0px;
    line-height: 22px;
    display: flex;
    align-items: center;
    width: 143px;
    height: 21px;
  }
  .tableColumn1 {
    position: absolute;
    top: 228px;
    left: 472px;
    width: 175px;
    height: 531px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  }
  .dataStart {
    position: absolute;
    top: 14px;
    left: 0px;
    line-height: 22px;
    font-weight: 500;
    display: inline-block;
    width: 157px;
  }
  .headingChild3 {
    position: absolute;
    height: 4%;
    width: 101.27%;
    top: 98%;
    right: -0.64%;
    bottom: -2%;
    left: -0.64%;
    border-top: 2px solid var(--light-border-light);
    box-sizing: border-box;
  }
  .desember20233 {
    position: absolute;
    top: 0px;
    left: 0px;
    line-height: 22px;
    display: flex;
    align-items: center;
    width: 157px;
    height: 50px;
  }
  .dateValueChild3 {
    position: absolute;
    height: 2%;
    width: 100.64%;
    top: 99%;
    right: -0.32%;
    bottom: -1%;
    left: -0.32%;
    border-top: 1px solid var(--color-whitesmoke-100);
    box-sizing: border-box;
  }
  .tableColumn2 {
    position: absolute;
    top: 228px;
    left: 647px;
    width: 157px;
    height: 533px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  }
  .idPeminjaman {
    position: absolute;
    top: 13px;
    left: 11px;
    line-height: 22px;
    font-weight: 500;
  }
  .groupIcon {
    position: absolute;
    top: 6px;
    right: 4px;
    width: 12px;
    height: 22px;
  }
  .heading3 {
    align-self: stretch;
    position: relative;
    height: 50px;
    color: var(--light-dark);
    font-family: var(--base-body-bold);
  }
  .div {
    position: absolute;
    top: 0px;
    left: 0px;
    line-height: 22px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 139px;
    height: 50px;
  }
  .div1 {
    position: absolute;
    top: 0px;
    left: 0px;
    line-height: 22px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 139px;
    height: 49px;
  }
  .titleValueChild8 {
    position: absolute;
    height: 98.05%;
    width: 100%;
    top: 0%;
    right: 0%;
    bottom: 1.95%;
    left: 0%;
    background-color: var(--light-white);
  }
  .div2 {
    position: absolute;
    top: 0px;
    left: 0px;
    line-height: 22px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 139px;
    height: 36px;
  }
  .titleValueChild9 {
    position: absolute;
    height: 1.95%;
    width: 100%;
    top: 98.05%;
    right: 0%;
    bottom: 0%;
    left: 0%;
    background-color: var(--color-whitesmoke-100);
    border: 1px solid var(--color-whitesmoke-100);
    box-sizing: border-box;
  }
  .titleValue5 {
    align-self: stretch;
    position: relative;
    height: 41px;
  }
  .tableColumn3 {
    position: absolute;
    top: 228px;
    left: 333px;
    width: 139px;
    height: 531px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    text-align: center;
  }
  .deskripsi {
    position: absolute;
    top: 14px;
    left: 0px;
    line-height: 22px;
    font-weight: 500;
    display: inline-block;
    width: 191px;
  }
  .headingChild7 {
    position: absolute;
    height: 4%;
    width: 101.05%;
    top: 98%;
    right: -0.52%;
    bottom: -2%;
    left: -0.52%;
    border-top: 2px solid var(--light-border-light);
    box-sizing: border-box;
  }
  .untukAcaraRapat {
    position: absolute;
    top: 0px;
    left: 0px;
    line-height: 22px;
    display: flex;
    align-items: center;
    width: 191px;
    height: 50px;
  }
  .dateValueChild9 {
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
  .tableColumn4 {
    position: absolute;
    top: 228px;
    left: 959px;
    width: 191px;
    height: 533px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  }
  .status {
    position: absolute;
    top: 14px;
    left: 56px;
    line-height: 22px;
    font-weight: 500;
  }
  .headingChild9 {
    position: absolute;
    height: 4%;
    width: 101.3%;
    top: 98%;
    right: -0.65%;
    bottom: -2%;
    left: -0.65%;
    border-top: 2px solid var(--light-border-light);
    box-sizing: border-box;
  }
  .menunggu {
    position: absolute;
    height: 48%;
    width: 52.6%;
    top: 26%;
    left: 9.74%;
    line-height: 22px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .vectorIcon {
    position: absolute;
    height: 40%;
    width: 12.99%;
    top: 32%;
    right: 12.99%;
    bottom: 28%;
    left: 74.03%;
    max-width: 100%;
    overflow: hidden;
    max-height: 100%;
  }
  .disetujui {
    position: absolute;
    top: 14px;
    left: 24px;
    line-height: 22px;
    display: flex;
    align-items: center;
    width: 79px;
  }
  .vectorIcon1 {
    position: absolute;
    height: 40%;
    width: 12.99%;
    top: 26%;
    right: 18.83%;
    bottom: 34%;
    left: 68.18%;
    max-width: 100%;
    overflow: hidden;
    max-height: 100%;
  }
  .dateValue10 {
    align-self: stretch;
    position: relative;
    height: 50px;
    text-align: left;
  }
  .disetujui1 {
    position: absolute;
    width: 51.3%;
    top: 22%;
    left: 15.58%;
    line-height: 22px;
    display: flex;
    align-items: center;
  }
  .vectorIcon2 {
    position: absolute;
    height: 40%;
    width: 12.99%;
    top: 24%;
    right: 18.83%;
    bottom: 36%;
    left: 68.18%;
    max-width: 100%;
    overflow: hidden;
    max-height: 100%;
  }
  .tableColumn5 {
    position: absolute;
    top: 228px;
    left: 1150px;
    width: 154px;
    height: 533px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    text-align: center;
  }
  .userDataPeminjaman {
    position: relative;
    background-color: var(--light-white);
    width: 100%;
    height: 1024px;
    overflow: hidden;
    text-align: left;
    font-size: var(--base-body-size);
    color: var(--light-secondary);
    font-family: var(--base-body);
  }
</style>
