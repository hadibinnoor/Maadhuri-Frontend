import { createContext, useState } from 'react';

type stateTypes = 'approved' | 'rejected' | 'pending';

type Data = {
    [key: string]: {
        text: string | null,
        audio: string | null,
        state: stateTypes
    }
}

const DataContext = createContext<{ data: Data, setData: React.Dispatch<React.SetStateAction<Data>> }>(null as any)

const DataProvider = ({ children }: any) => {

    const defaultData: Data = {
        script1: { text: null, audio: null, state: 'pending' },
        script2: { text: null, audio: null, state: 'pending' },
        script3: { text: null, audio: null, state: 'pending' }

    }
    const [data, setData] = useState<Data>(defaultData)


    return (
        <DataContext.Provider value={{ data: data, setData: setData }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataProvider;
export { DataContext };
export type { Data }