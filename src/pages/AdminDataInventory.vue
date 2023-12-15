<template>
  <div :class="$style.adminDataInventory">
    <div :class="$style.sidebar">
      <div :class="$style.frame">
        <img
          :class="$style.frameChild"
          alt=""
          src="/rectangle-2.svg"
          data-scroll-to="rectangle"
        />
        <div :class="$style.frame1">
          <div :class="$style.suikaParent">
            <b :class="$style.suika">SUIKA</b>
            <div :class="$style.pexelsPhoto23790041" />
            <img :class="$style.eiuserIcon" alt="" src="/eiuser.svg" />
          </div>
        </div>
      </div>
      <div :class="$style.frameParent">
        <img :class="$style.frameIcon" alt="" src="/frame.svg" />
        <div :class="$style.frame2">
          <div :class="$style.navigation">
            <div :class="$style.title">
              <div :class="$style.overline">Main</div>
            </div>
            <div :class="$style.link" @click="onLinkContainerClick">
              <img
                :class="$style.iconHomeSimpleDoor"
                alt=""
                src="/icon--homesimpledoor.svg"
              />
              <div :class="$style.label">Dashboard</div>
            </div>
            <div :class="$style.link" @click="onLinkContainer1Click">
              <img
                :class="$style.materialSymbolspersonSearchIcon"
                alt=""
                src="/materialsymbolspersonsearch.svg"
              />
              <div :class="$style.label">History</div>
            </div>
            <div :class="$style.dropdown">
              <div :class="$style.link2">
                <img
                  :class="$style.iconHomeSimpleDoor"
                  alt=""
                  src="/icon--reports.svg"
                />
                <div :class="$style.label2" :onClick="onLabelText2Click">
                  Master Data
                </div>
              </div>
            </div>
            <div :class="$style.link" @click="onLinkContainer3Click">
              <img
                :class="$style.iconHomeSimpleDoor"
                alt=""
                src="/icon--page.svg"
              />
              <div :class="$style.label">Peminjaman</div>
            </div>
            <div :class="$style.dropdown1">
              <div :class="$style.link2">
                <img
                  :class="$style.iconHomeSimpleDoor"
                  alt=""
                  src="/icon--user-1.svg"
                />
                <div :class="$style.label">Account</div>
                <img
                  :class="$style.iconChevron"
                  alt=""
                  src="/icon--chevron.svg"
                />
              </div>
              <div :class="$style.linksContainer">
                <div :class="$style.link5" @click="onLinkContainer5Click">
                  <div :class="$style.label5">
                    <ul :class="$style.user">
                      User
                    </ul>
                  </div>
                </div>
                <div :class="$style.link6" @click="onLinkContainer6Click">
                  <div :class="$style.label5">
                    <ul :class="$style.user">
                      Edit Profile
                    </ul>
                  </div>
                </div>
                <div :class="$style.line" />
              </div>
            </div>
          </div>
          <div :class="$style.frame3">
            <div :class="$style.logout">Logout</div>
          </div>
        </div>
      </div>
    </div>
    <div :class="$style.rectangleParent">
      <div :class="$style.frameItem" />
      <div :class="$style.admin1">ADMIN</div>
      <img
        :class="$style.logoSuikaTransformedPrevUiIcon"
        alt=""
        src="/logo-suikatransformed-prev-ui-1@2x.png"
      />
    </div>
    <div :class="$style.adminDataInventoryChild" />
    <div :class="$style.adminDataInventoryItem" />
    <div :class="$style.tableColumn">
      <div :class="$style.heading">
        <div :class="$style.headingChild" />
        <div :class="$style.inventoryId">Inventory ID</div>
        <img :class="$style.headingItem" alt="" src="/group-2061.svg" />
      </div>
      <div :class="$style.titleValue">
        <div :class="$style.testTitle">1002</div>
        <div :class="$style.titleValueChild" />
      </div>
      <div :class="$style.titleValue">
        <div :class="$style.testTitle">1003</div>
        <div :class="$style.titleValueChild" />
      </div>
      <div :class="$style.titleValue">
        <div :class="$style.testTitle">1003</div>
        <div :class="$style.titleValueInner" />
      </div>
      <div :class="$style.titleValue">
        <div :class="$style.testTitle">1004</div>
        <div :class="$style.titleValueChild" />
      </div>
    </div>
    <div :class="$style.tableColumn1">
      <div :class="$style.heading">
        <div :class="$style.headingChild" />
        <div :class="$style.nama">Nama</div>
      </div>
      <div :class="$style.titleValue4">
        <div :class="$style.titleValueChild1" />
        <div :class="$style.proyektorLxz">Proyektor LXZ</div>
      </div>
      <div :class="$style.titleValue">
        <div :class="$style.laptopLenovo">Laptop Lenovo</div>
        <div :class="$style.titleValueChild" />
      </div>
      <div :class="$style.titleValue">
        <div :class="$style.testTitle3">20003</div>
        <div :class="$style.titleValueInner" />
      </div>
      <div :class="$style.titleValue">
        <div :class="$style.testTitle3">20004</div>
        <div :class="$style.titleValueChild" />
      </div>
    </div>
    <div :class="$style.masterDataInventory">Master Data Inventory</div>
    <div :class="$style.tableColumn2">
      <div :class="$style.heading">
        <div :class="$style.kategori">Kategori</div>
        <div :class="$style.lineDiv" />
      </div>
      <div :class="$style.dateValue">
        <div :class="$style.peralatan">Peralatan</div>
        <div :class="$style.dateValueChild" />
      </div>
      <div :class="$style.dateValue">
        <div :class="$style.peralatan">Peralatan</div>
        <div :class="$style.dateValueChild" />
      </div>
      <div :class="$style.dateValue">
        <div :class="$style.octoober2021">120004</div>
        <div :class="$style.dateValueChild" />
      </div>
      <div :class="$style.dateValue">
        <div :class="$style.frame4">
          <div :class="$style.octoober20211">120005</div>
        </div>
        <div :class="$style.dateValueChild" />
      </div>
    </div>
    <div :class="$style.tableColumn3">
      <div :class="$style.heading">
        <div :class="$style.status">Status</div>
        <div :class="$style.headingChild1" />
      </div>
      <div :class="$style.dateValue">
        <img
          :class="$style.teenyiconstickCircleSolid"
          alt=""
          src="/teenyiconstickcirclesolid.svg"
        />
        <div :class="$style.tersedia">Tersedia</div>
        <div :class="$style.dateValueChild2" />
      </div>
      <div :class="$style.dateValue">
        <div :class="$style.phxFill" />
        <img :class="$style.vectorIcon" alt="" src="/vector.svg" />
        <div :class="$style.dipinjam">Dipinjam</div>
        <div :class="$style.dateValueChild2" />
      </div>
      <div :class="$style.dateValue">
        <div :class="$style.octoober2021">120005</div>
        <div :class="$style.dateValueChild2" />
      </div>
      <div :class="$style.dateValue">
        <div :class="$style.octoober2021">120004</div>
        <div :class="$style.dateValueChild2" />
      </div>
    </div>
    <div :class="$style.iconButton" @click="onIconButtonContainerClick">
      <div :class="$style.tambahParent">
        <div :class="$style.tambah">Tambah</div>
        <img :class="$style.component1Icon" alt="" src="/component-1.svg" />
      </div>
    </div>
    <div :class="$style.tableColumn4">
      <div :class="$style.heading4">
        <div :class="$style.headingChild" />
        <div :class="$style.action">Action</div>
      </div>
      <div :class="$style.actionValue">
        <div :class="$style.actionValueChild" />
        <div :class="$style.actionValueItem" />
        <img :class="$style.actionValueInner" alt="" src="/group-1.svg" />
      </div>
      <div :class="$style.actionValue">
        <div :class="$style.actionValueChild" />
        <div :class="$style.actionValueItem" />
        <img :class="$style.actionValueInner" alt="" src="/group-1.svg" />
      </div>
      <div :class="$style.actionValue">
        <div :class="$style.actionValueChild" />
        <div :class="$style.actionValueItem" />
        <img :class="$style.actionValueInner" alt="" src="/group-1.svg" />
      </div>
      <div :class="$style.actionValue">
        <div :class="$style.actionValueChild" />
        <div :class="$style.actionValueItem" />
        <img :class="$style.actionValueInner" alt="" src="/group-1.svg" />
      </div>
    </div>
    <div :class="$style.tableColumn5">
      <div :class="$style.heading">
        <div :class="$style.deskripsi">Deskripsi</div>
        <div :class="$style.headingChild3" />
      </div>
      <div :class="$style.dateValue">
        <div :class="$style.proyektorBerkualitas">Proyektor Berkualitas</div>
        <div :class="$style.dateValueChild6" />
      </div>
      <div :class="$style.dateValue">
        <div :class="$style.laptopRingan">Laptop RIngan</div>
        <div :class="$style.dateValueChild6" />
      </div>
      <div :class="$style.dateValue">
        <div :class="$style.octoober2021">120004</div>
        <div :class="$style.dateValueChild6" />
      </div>
      <div :class="$style.dateValue">
        <div :class="$style.frame4">
          <div :class="$style.octoober20211">120005</div>
        </div>
        <div :class="$style.dateValueChild6" />
      </div>
    </div>
  </div>
</template>
<script>
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "AdminDataInventory",
    methods: {
      onLinkContainerClick() {
        this.$router.push("/admin-halaman-admin");
      },
      onLinkContainer1Click() {
        this.$router.push("/admin-data-history");
      },
      onLabelText2Click() {
        const anchor = document.querySelector("[data-scroll-to='rectangle']");
        if (anchor) {
          anchor.scrollIntoView({ block: "start", behavior: "smooth" });
        }
      },
      onLinkContainer3Click() {
        this.$router.push("/admin-data-peminjaman");
      },
      onLinkContainer5Click() {
        this.$router.push("/admin-data-user");
      },
      onLinkContainer6Click() {
        this.$router.push("/admin-update-admin");
      },
      onIconButtonContainerClick() {
        this.$router.push("/admin-tambah-inventory");
      },
    },
  });
</script>
<style module>
  .frameChild {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 270px;
    height: 1024px;
  }
  .suika {
    position: absolute;
    height: 11.39%;
    width: 34.16%;
    top: 85.08%;
    left: 32.92%;
    display: inline-block;
  }
  .admin {
    position: absolute;
    top: 190.5px;
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
    height: 187px;
  }
  .eiuserIcon {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 161px;
    height: 167.6px;
    overflow: hidden;
  }
  .suikaParent {
    position: absolute;
    height: 100%;
    width: 88.46%;
    top: 0%;
    right: 11.54%;
    bottom: 0%;
    left: 0%;
  }
  .frame1 {
    position: absolute;
    top: 88.8px;
    left: 44px;
    width: 182px;
    height: 209.8px;
    overflow: hidden;
  }
  .frame {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 270px;
    height: 1024px;
    overflow: hidden;
  }
  .frameIcon {
    position: absolute;
    top: 482.7px;
    left: 0px;
    width: 147px;
    height: 15.6px;
    overflow: hidden;
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
    cursor: pointer;
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
    cursor: pointer;
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
    cursor: pointer;
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
    cursor: pointer;
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
    width: 208px;
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
    height: 507.9px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-5xl) var(--padding-5xl) 0px;
    box-sizing: border-box;
    gap: var(--gap-5xs);
  }
  .logout {
    position: absolute;
    top: 0px;
    left: 56px;
    font-weight: 500;
    display: inline-block;
    width: 51px;
    height: 15.6px;
  }
  .frame3 {
    position: absolute;
    top: 480.8px;
    left: 0px;
    width: 107px;
    height: 15.6px;
    overflow: hidden;
    font-family: var(--font-montserrat);
  }
  .frame2 {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 256px;
    height: 507.9px;
    overflow: hidden;
  }
  .frameParent {
    position: absolute;
    top: 298.5px;
    left: 7px;
    width: 256px;
    height: 507.9px;
    font-size: var(--base-body-size);
    font-family: var(--font-inter);
  }
  .sidebar {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 270px;
    height: 1024px;
    font-size: var(--font-size-mid);
    color: var(--color-black);
    font-family: var(--font-montserrat);
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
    top: 10px;
    left: 7px;
    border-radius: var(--br-123xl);
    width: 88px;
    height: 83.7px;
    object-fit: cover;
  }
  .rectangleParent {
    position: absolute;
    top: -10px;
    left: -7px;
    width: 277px;
    height: 83.7px;
    font-size: var(--font-size-5xl);
    color: var(--color-black);
    font-family: var(--base-base-primary-bold);
  }
  .adminDataInventoryChild {
    position: absolute;
    top: -2px;
    left: 270px;
    background-color: var(--color-orange);
    width: 1170px;
    height: 68px;
  }
  .adminDataInventoryItem {
    position: absolute;
    top: 124px;
    left: 298px;
    border-radius: var(--br-xl);
    background-color: var(--color-orange);
    width: 1075px;
    height: 68px;
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
  .inventoryId {
    position: absolute;
    top: 17px;
    left: 9px;
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
    background-color: var(--color-gainsboro-200);
    height: 50px;
    color: var(--light-dark);
    font-family: var(--base-base-primary-bold);
  }
  .testTitle {
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
    top: 230px;
    left: 311px;
    width: 134px;
    height: 556px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    text-align: center;
  }
  .nama {
    position: absolute;
    top: 12px;
    left: 67px;
    line-height: 22px;
    font-weight: 500;
  }
  .titleValueChild1 {
    position: relative;
    background-color: var(--light-light);
    border: 1px solid var(--light-light);
    box-sizing: border-box;
    width: 172px;
    height: 1px;
    z-index: 0;
  }
  .proyektorLxz {
    position: absolute;
    margin: 0 !important;
    top: 14px;
    left: 0px;
    line-height: 22px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 172px;
    z-index: 1;
  }
  .titleValue4 {
    align-self: stretch;
    background-color: var(--light-white);
    height: 49px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    position: relative;
  }
  .laptopLenovo {
    position: absolute;
    top: 14px;
    left: 34px;
    line-height: 22px;
  }
  .testTitle3 {
    position: absolute;
    top: 14px;
    left: 64px;
    line-height: 22px;
  }
  .tableColumn1 {
    position: absolute;
    top: 230px;
    left: 445px;
    width: 172px;
    height: 556px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    text-align: center;
  }
  .masterDataInventory {
    position: absolute;
    top: 140px;
    left: 342px;
    font-size: var(--font-size-17xl);
    font-weight: 500;
    font-family: var(--base-base-primary-bold);
    color: var(--color-black);
    display: inline-block;
    width: 392px;
    height: 43px;
  }
  .kategori {
    position: absolute;
    top: 14px;
    left: 68px;
    line-height: 22px;
    font-weight: 500;
  }
  .lineDiv {
    position: absolute;
    height: 4%;
    width: 101.05%;
    top: 98%;
    right: -0.53%;
    bottom: -2%;
    left: -0.53%;
    border-top: 2px solid var(--light-border-light);
    box-sizing: border-box;
  }
  .peralatan {
    position: absolute;
    top: 14px;
    left: 0px;
    line-height: 22px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 190px;
  }
  .dateValueChild {
    position: absolute;
    height: 2%;
    width: 100.53%;
    top: 99%;
    right: -0.26%;
    bottom: -1%;
    left: -0.26%;
    border-top: 1px solid var(--color-whitesmoke-100);
    box-sizing: border-box;
  }
  .dateValue {
    align-self: stretch;
    position: relative;
    background-color: var(--light-white);
    height: 50px;
  }
  .octoober2021 {
    position: absolute;
    top: 14px;
    left: 49px;
    line-height: 22px;
  }
  .octoober20211 {
    position: absolute;
    top: 0px;
    left: 49px;
    line-height: 22px;
  }
  .frame4 {
    position: absolute;
    top: 14px;
    left: 0px;
    width: 97px;
    height: 22px;
    overflow: hidden;
  }
  .tableColumn2 {
    position: absolute;
    top: 230px;
    left: 828px;
    width: 190px;
    height: 555px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    text-align: center;
  }
  .status {
    position: absolute;
    top: 14px;
    left: 64px;
    line-height: 22px;
    font-weight: 500;
  }
  .headingChild1 {
    position: absolute;
    height: 4%;
    width: 101.18%;
    top: 98%;
    right: -0.59%;
    bottom: -2%;
    left: -0.59%;
    border-top: 2px solid var(--light-border-light);
    box-sizing: border-box;
  }
  .teenyiconstickCircleSolid {
    position: absolute;
    top: 14px;
    left: 109px;
    width: 20px;
    height: 20px;
    overflow: hidden;
  }
  .tersedia {
    position: absolute;
    top: 13px;
    left: 24px;
    line-height: 22px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 61px;
  }
  .dateValueChild2 {
    position: absolute;
    height: 2%;
    width: 100.59%;
    top: 99%;
    right: -0.3%;
    bottom: -1%;
    left: -0.3%;
    border-top: 1px solid var(--color-whitesmoke-100);
    box-sizing: border-box;
  }
  .phxFill {
    position: absolute;
    top: -31.4px;
    left: 0px;
    width: 31.4px;
    height: 31.4px;
    overflow: hidden;
  }
  .vectorIcon {
    position: absolute;
    height: 40%;
    width: 11.83%;
    top: 32%;
    right: 23.08%;
    bottom: 28%;
    left: 65.09%;
    max-width: 100%;
    overflow: hidden;
    max-height: 100%;
  }
  .dipinjam {
    position: absolute;
    top: 14px;
    left: 23px;
    line-height: 22px;
  }
  .tableColumn3 {
    position: absolute;
    top: 230px;
    left: 1018px;
    width: 169px;
    height: 555px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    text-align: center;
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
    top: 140px;
    left: 1219px;
    border-radius: var(--br-xl);
    background-color: var(--color-slateblue);
    box-shadow: var(--small);
    height: 37px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: var(--padding-6xs) var(--padding-mini);
    box-sizing: border-box;
    cursor: pointer;
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
  .heading4 {
    align-self: stretch;
    position: relative;
    background-color: var(--color-gainsboro-200);
    height: 50px;
  }
  .actionValueChild {
    position: relative;
    background-color: var(--light-white);
    width: 220px;
    height: 50px;
    z-index: 0;
  }
  .actionValueItem {
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
  .actionValueInner {
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
    z-index: 2;
  }
  .actionValue {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    position: relative;
    gap: var(--gap-3xs);
  }
  .tableColumn4 {
    position: absolute;
    top: 230px;
    left: 1187px;
    width: 154px;
    height: 555px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    color: var(--light-dark);
    font-family: var(--base-base-primary-bold);
  }
  .deskripsi {
    position: absolute;
    top: 14px;
    left: 65px;
    line-height: 22px;
    font-weight: 500;
  }
  .headingChild3 {
    position: absolute;
    height: 4%;
    width: 100.95%;
    top: 98%;
    right: -0.47%;
    bottom: -2%;
    left: -0.47%;
    border-top: 2px solid var(--light-border-light);
    box-sizing: border-box;
  }
  .proyektorBerkualitas {
    position: absolute;
    top: 3px;
    left: 24px;
    line-height: 22px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 187px;
    height: 47px;
  }
  .dateValueChild6 {
    position: absolute;
    height: 2%;
    width: 100.47%;
    top: 99%;
    right: -0.24%;
    bottom: -1%;
    left: -0.24%;
    border-top: 1px solid var(--color-whitesmoke-100);
    box-sizing: border-box;
  }
  .laptopRingan {
    position: absolute;
    top: 14px;
    left: 0px;
    line-height: 22px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 211px;
  }
  .tableColumn5 {
    position: absolute;
    top: 230px;
    left: 617px;
    width: 211px;
    height: 555px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    text-align: center;
  }
  .adminDataInventory {
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
