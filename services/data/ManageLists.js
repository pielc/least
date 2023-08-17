import PocketBase from "pocketbase";

const ManageLists = class {
  constructor(pb) {
    this.pb = pb;
  }

  static async auth() {
    const pb = new PocketBase("http://127.0.0.1:8090");
    await pb
      .collection("users")
      .authWithPassword("dev@least-test.com", "adminPB&least-dev");
    return new ManageLists(pb);
  }

  async getAll() {
    const records = await this.pb.collection("lists").getFullList({
      sort: "-created",
    });

    return records;
  }
};

export default ManageLists;
