
import useSWR from 'swr'

const fetcher = (args:string) => fetch(args).then(res => res.json())

export interface Tool {
    _id: string;
    title: string;
    toolDescription: string;
    shortDescription: string;
    useCase1: string;
    useCase2: string;
    useCase3: string;
    price: number;
    pricePlan: string;
    pricing: string;
    toolURL: string;
    toolFeature: string;
    toolTags: string[];
    toolScreenshot: string;
    userId: string;
    category: string;
    subcategories: string;
  }
  


const ToolsCard = () => {

const { data, error, isLoading } = useSWR('https://ai-tool-express-api.vercel.app/api/ai_tool', fetcher)

if (error) return <div>failed to load</div>
if (isLoading) return <div>loading...</div>

console.log(data);

    return (
        <div>
            <div className='p-4 grid grid-cols-4 gap-3 '>
                {
                    data.data.map(( item : Tool)=>  <div className='border border-1 p-4 text-center space-y-3' key={item._id}>
                        <img src={`https://picsum.photos/500/350?${Math.random()}`} alt="" />
                        <h2 className='text-xl font-semibold '>{item.title}</h2>
                        <p>{item.toolDescription}</p>
                    </div> )
                }
            </div>
        </div>
    );
};

export default ToolsCard;