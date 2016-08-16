import ClientInfo from './clientInfo';

interface RequestParameters {
    cartId: string;
    itemId?: string;
    clientInfo: ClientInfo;
    params: Map<string, any>;
}

export default RequestParameters;