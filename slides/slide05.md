# React Query

## [About](https://github.com/tannerlinsley/react-query)

- 338 contributors
- Open sourced
- 11.8kb after gziping
- 2.6M/month downloads

## Good developer User experience


- hooks based 
	- useQuery: fetching data
	- useMutation: change(create/update/delete) data
	- useQueryClient: get the query client at somewhere

- configurable
	- client

	```ts
	const queryClient = new ReactQueryClient({
		defaultQuer: {
			retries: 1,
			staleTime: 1000,
			cacheTime: 1000
		}
	});

	const QueryProvider: React.FC = ({children}) => {
		return <QueryClientProvider client={}>{children}{children}</QueryClientProvider>
	}

	export default QueryClientProvider;
	export { queryClient }
	```

	- query

	```ts
	const getSites = () => axios.get('/sites')
	const queryKey = ['sites'];
	const useSites = () => {
		return useQuery(queryKey, getSites, {
			onSuccess: () =>  { /* do something */},
			onError: () => { /* do something */ }
		})
	}
	```

	- mutation

	```ts
	const createSite = (site) => axios.post('/sites', site);

	const useCreateSite = () => {
		const queryClient = useQueryClient();
		return useMutation({
			queryKey: ['sites'],
			queryFn: (site) => createSite,
			onSuccess: (site) =>  {
				queryClient.refetch(['sites'])
			}
		})
	}
	```
- Handy
	- Reduce reduant/repeated code

	```ts
	const {isLoading, isIdle, isSuccess, isError} = useQuery(/*some other code*/)
	```

	vs

	```ts
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [data, setData] = useState(null);
	const [error,setError] = useState(null);

	useEffect(() => {
		setIsLoading(true)
		getData().then().catch(e => {
			setError(e);
		})
	}, [ /* or denpendencies*/])

	return {
		isIdle,
		isLoading,
		isSuccess,
		isError,
		data, 
		error
	}
	```