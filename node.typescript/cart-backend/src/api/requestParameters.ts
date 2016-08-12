interface RequestParameters {
    cartId: string;
    itemId?: string;
    apiClient: string;
    apiVersion: string;
    params: Map<string, any>;
}

export default RequestParameters;