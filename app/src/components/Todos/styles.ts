import styled from 'styled-components';

export const Wrapper = styled.div`
	margin-top: 2rem;
	
	.btn-group {
		text-align: center;
	}
	/* table */
	td,
	th {
		padding-left: 1rem;
	}
	tbody:empty {
		display: none;
	}

	/* no data */
	.no-data {
		text-align: center;
		border-top: none;
		padding: 20vh;
		margin-top: -1rem;
		border-radius: 0;
	}
`;
