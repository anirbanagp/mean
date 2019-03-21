/**
 * this is base service contain some common functioinalities of all services
 *
 * @author Anirban Saha
 */
export abstract class BaseService {

    protected model;

    /**
     * find one document in respective of passed query
     * @param query query object
     */
    public async findOne(query: object) {
        let model = await this.model.findOne(query).exec();

        return model;
    }

    /**
     * find all matched documents
     * @param query query object
     */
    public async find(query: object) {
        let model = await this.model.find(query).exec();

        return model;
    }
}
