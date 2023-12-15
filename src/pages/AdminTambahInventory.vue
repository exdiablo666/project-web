<template>
  <div :class="$style.adminTambahInventory">
    <div :class="$style.header">
      <div :class="$style.headerChild" />
      <div :class="$style.sidebar">
        <img :class="$style.sidebarChild" alt="" src="/rectangle-21.svg" />
        <div :class="$style.profile">
          <div :class="$style.suikaParent">
            <b :class="$style.suika">SUIKA</b>
            <div :class="$style.pexelsPhoto23790041" />
            <img :class="$style.eiuserIcon" alt="" src="/eiuser1.svg" />
          </div>
        </div>
        <div :class="$style.navigationParent">
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
            <div :class="$style.dropdown" @click="onDropdownContainerClick">
              <div :class="$style.link2">
                <img
                  :class="$style.iconHomeSimpleDoor"
                  alt=""
                  src="/icon--reports.svg"
                />
                <div :class="$style.label">Master Data</div>
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
          <img :class="$style.signOutAlt1Icon" alt="" src="/signoutalt-1.svg" />
          <div :class="$style.logout" @click="onLogoutTextClick">Logout</div>
        </div>
      </div>
    </div>
    <div :class="$style.rectangleParent">
      <div :class="$style.groupChild" />
      <img
        :class="$style.logoSuikaTransformedPrevUiIcon"
        alt=""
        src="/logo-suikatransformed-prev-ui-13@2x.png"
      />
    </div>
    <div :class="$style.adminTambahInventoryChild" />
    <div :class="$style.adminTambahInventoryItem" />
    <div :class="$style.adminTambahInventoryInner" />
    <div :class="$style.inventoryId">Inventory ID</div>
    <div :class="$style.nama">Nama</div>
    <div :class="$style.rectangleGroup">
      <div :class="$style.groupItem" />
      <div :class="$style.deskripsi">Deskripsi</div>
    </div>
    <div :class="$style.rectangleContainer" @click="onGroupContainer4Click">
      <div :class="$style.groupInner" />
      <div :class="$style.tambah">Tambah</div>
    </div>
    <div :class="$style.groupDiv">
      <div :class="$style.rectangleParent1">
        <div :class="$style.groupItem" />
        <img :class="$style.groupIcon" alt="" src="/group-2063.svg" />
        <div :class="$style.deskripsi">Kategori</div>
        <div :class="$style.groupWrapper">
          <div :class="$style.rectangleParent2">
            <div :class="$style.groupItem" />
            <div :class="$style.deskripsi">Status</div>
          </div>
        </div>
        <div :class="$style.pilihKategori">-- Pilih Kategori--</div>
      </div>
    </div>
  </div>
</template>
<script>
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "AdminTambahInventory",
    methods: {
      onLinkContainerClick() {
        this.$router.push("/admin-halaman-admin");
      },
      onLinkContainer1Click() {
        this.$router.push("/admin-data-history");
      },
      onDropdownContainerClick() {
        this.$router.push("/admin-data-inventory");
      },
      onLinkContainer3Click() {
        this.$router.push("/admin-data-peminjaman");
      },
      onLinkContainer5Click() {
        this.$router.push("/admin-data-user");
      },
      onLinkContainer6Click() {
        this.$router.push("/admin-profile");
      },
      onLogoutTextClick() {
        this.$router.push("/");
      },
      onGroupContainer4Click() {
        this.$router.push("/admin-data-inventory");
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
    top: 0px;
    left: 0px;
    width: 270px;
    height: 1026px;
  }
  .suika {
    position: absolute;
    height: 11.41%;
    width: 34.16%;
    top: 86.45%;
    left: 32.92%;
    display: inline-block;
  }
  .admin {
    position: absolute;
    top: 190.8px;
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
    height: 187.4px;
  }
  .eiuserIcon {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 161px;
    height: 168px;
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
    height: 20.5%;
    width: 59.63%;
    top: 8.67%;
    right: 24.07%;
    bottom: 70.83%;
    left: 16.3%;
  }
  .overline {
    flex: 1;
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
  }
  .link5 {
    align-self: stretch;
    border-radius: var(--br-5xs);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    padding: var(--padding-5xs) var(--padding-xs);
    cursor: pointer;
    z-index: 0;
  }
  .link6 {
    align-self: stretch;
    border-radius: var(--br-5xs);
    background-color: var(--color-gold);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    padding: var(--padding-5xs) var(--padding-xs);
    cursor: pointer;
    z-index: 1;
  }
  .line {
    align-self: stretch;
    position: absolute;
    margin: 0 !important;
    height: 100%;
    top: 0%;
    bottom: 0%;
    left: -13px;
    background-color: var(--color-gainsboro-200);
    z-index: 2;
  }
  .linksContainer {
    align-self: stretch;
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
    top: 483.6px;
    left: 130px;
    width: 17px;
    height: 15.6px;
    overflow: hidden;
  }
  .logout {
    position: absolute;
    top: 481.8px;
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
    top: 299px;
    left: 7px;
    width: 256px;
    height: 499.2px;
    font-size: var(--base-body-size);
    font-family: var(--font-inter);
  }
  .sidebar {
    position: absolute;
    top: 2px;
    left: 0px;
    width: 270px;
    height: 1026px;
  }
  .header {
    position: absolute;
    top: -2px;
    left: 0px;
    width: 1440px;
    height: 1028px;
    font-size: var(--font-size-mid);
    font-family: var(--font-montserrat);
  }
  .groupChild {
    position: absolute;
    top: 8px;
    left: 4px;
    background-color: var(--color-orange);
    border-right: 1px solid var(--color-gainsboro-100);
    border-bottom: 1px solid var(--color-gainsboro-100);
    box-sizing: border-box;
    width: 270px;
    height: 68.8px;
  }
  .admin1 {
    position: absolute;
    top: 27.5px;
    left: 90px;
    font-weight: 800;
    display: inline-block;
    width: 77px;
    height: 32.1px;
  }
  .logoSuikaTransformedPrevUiIcon {
    position: absolute;
    top: 10px;
    left: 4px;
    border-radius: var(--br-123xl);
    width: 87px;
    height: 83.7px;
    object-fit: cover;
  }
  .rectangleParent {
    position: absolute;
    top: -10px;
    left: -4px;
    width: 274px;
    height: 83.7px;
    font-size: var(--font-size-5xl);
  }
  .adminTambahInventoryChild {
    position: absolute;
    top: 116px;
    left: 333px;
    border-radius: var(--br-xl);
    background-color: var(--light-white);
    border: 1px solid var(--color-gray-200);
    box-sizing: border-box;
    width: 1044px;
    height: 713px;
  }
  .adminTambahInventoryItem {
    position: absolute;
    top: 182px;
    left: 504px;
    border-radius: var(--br-xl);
    background-color: var(--light-white);
    border: 1px solid var(--color-black);
    box-sizing: border-box;
    width: 701px;
    height: 56px;
  }
  .adminTambahInventoryInner {
    position: absolute;
    top: 299px;
    left: 504px;
    border-radius: var(--br-xl);
    background-color: var(--light-white);
    border: 1px solid var(--color-black);
    box-sizing: border-box;
    width: 701px;
    height: 54px;
  }
  .inventoryId {
    position: absolute;
    top: 145px;
    left: 532px;
    font-weight: 500;
    display: inline-block;
    width: 392px;
  }
  .nama {
    position: absolute;
    top: 262px;
    left: 535px;
    font-weight: 500;
    display: inline-block;
    width: 392px;
  }
  .groupItem {
    position: absolute;
    top: 37px;
    left: 0px;
    border-radius: var(--br-xl);
    background-color: var(--light-white);
    border: 1px solid var(--color-black);
    box-sizing: border-box;
    width: 701px;
    height: 60px;
  }
  .deskripsi {
    position: absolute;
    top: 0px;
    left: 22px;
    font-weight: 500;
    display: inline-block;
    width: 277px;
  }
  .rectangleGroup {
    position: absolute;
    top: 379px;
    left: 504px;
    width: 701px;
    height: 97px;
  }
  .groupInner {
    position: absolute;
    top: 0px;
    left: 0px;
    border-radius: var(--br-xl);
    background-color: var(--color-red-100);
    border: 1px solid var(--color-black);
    box-sizing: border-box;
    width: 300px;
    height: 60px;
  }
  .tambah {
    position: absolute;
    top: 16px;
    left: 5px;
    font-weight: 500;
    display: inline-block;
    width: 295px;
  }
  .rectangleContainer {
    position: absolute;
    top: 751px;
    left: 705px;
    width: 300px;
    height: 60px;
    cursor: pointer;
    text-align: center;
    font-size: var(--font-size-5xl);
    color: var(--color-whitesmoke-100);
  }
  .groupIcon {
    position: absolute;
    top: 58px;
    right: 32px;
    width: 27px;
    height: 25px;
  }
  .rectangleParent2 {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 701px;
    height: 97px;
  }
  .groupWrapper {
    position: absolute;
    top: 115px;
    left: 0px;
    width: 701px;
    height: 97px;
  }
  .pilihKategori {
    position: absolute;
    top: 59px;
    left: 31px;
    font-size: var(--base-large-size);
    display: inline-block;
    width: 277px;
  }
  .rectangleParent1 {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 701px;
    height: 212px;
  }
  .groupDiv {
    position: absolute;
    top: 489px;
    left: 504px;
    width: 701px;
    height: 212px;
  }
  .adminTambahInventory {
    position: relative;
    background-color: var(--light-white);
    width: 100%;
    height: 1024px;
    overflow: hidden;
    text-align: left;
    font-size: var(--font-size-xl);
    color: var(--color-black);
    font-family: var(--base-base-primary-bold);
  }
</style>
