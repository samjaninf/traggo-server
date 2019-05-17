import {gql} from 'apollo-boost';

export const Devices = gql`
    query Devices {
        devices {
            id
            name
            expiresAt
            createdAt
            activeAt
        }
        currentDevice {
            id
        }
    }
`;
export const RemoveDevice = gql`
    mutation RemoveDevice($id: Int!) {
        removeDevice(id: $id) {
            id
        }
    }
`;
export const UpdateDevice = gql`
    mutation UpdateDevice($id: Int!, $name: String!, $expiresAt: Time!) {
        updateDevice(id: $id, name: $name, expiresAt: $expiresAt) {
            id
        }
    }
`;

export const CreateDevice = gql`
    mutation CreateDevice($name: String!, $expiresAt: Time!) {
        device: createDevice(name: $name, expiresAt: $expiresAt) {
            token
        }
    }
`;