import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { addTransaction, deleteTransaction, getTransactions } from "../utils";

export const useTransactionsQuery = () => {
    return useQuery({
        queryFn: () => getTransactions(),
        queryKey: ['transactions']
    });
}


export const useTransactionMutations = () => {
    const queryClient = useQueryClient();

    const addMutation = useMutation({
        mutationFn: addTransaction,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["transactions"] });
        },
    });

    const deleteMutation = useMutation({
        mutationFn: deleteTransaction,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["transactions"] });
        },
    });

    return { addMutation, deleteMutation };
};