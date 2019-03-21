export abstract class BaseService {
    protected model;

    public async findOne(query: object) {
        let model = await this.model.findOne(query);

        return model;
    }
}
