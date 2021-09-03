import styled from "styled-components";

export const FormField = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	margin-bottom: 1rem;

	label {
		margin-right: 1rem;
	}

	input[type="radio"] {
		margin-right: 0.25rem;
	}

	.form-label {
		margin-bottom: 0;
	}
`;
