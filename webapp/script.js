/*=======================================================================================================================================*/

const tokenContractAddress = "0xfF4d69d4A4212eE465F82704fEB59B8104690FCE";
const tokenABI = [
  {
    inputs: [
      {
        internalType: "address",
        name: "defaultAdmin",
        type: "address",
      },
      {
        internalType: "address",
        name: "minter",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "AccessControlBadConfirmation",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "neededRole",
        type: "bytes32",
      },
    ],
    name: "AccessControlUnauthorizedAccount",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "allowance",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "needed",
        type: "uint256",
      },
    ],
    name: "ERC20InsufficientAllowance",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "balance",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "needed",
        type: "uint256",
      },
    ],
    name: "ERC20InsufficientBalance",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "approver",
        type: "address",
      },
    ],
    name: "ERC20InvalidApprover",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "receiver",
        type: "address",
      },
    ],
    name: "ERC20InvalidReceiver",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "ERC20InvalidSender",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "ERC20InvalidSpender",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "previousAdminRole",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "newAdminRole",
        type: "bytes32",
      },
    ],
    name: "RoleAdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleGranted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleRevoked",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [],
    name: "DEFAULT_ADMIN_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "MINTER_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "RewardUser",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleAdmin",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "grantRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "hasRole",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "callerConfirmation",
        type: "address",
      },
    ],
    name: "renounceRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "revokeRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];
/*=======================================================================================================================================*/
let web3;
let account;
let quizData;
let currentQuestionIndex = 0;
let redeemedReward = false;
let score = 0;
let ashEarned = 0;

/*=======================================================================================================================================*/

async function connectWallet() {
  if (window.ethereum) {
    web3 = new Web3(window.ethereum);
    try {
      await window.ethereum.enable();
      const accounts = await web3.eth.getAccounts();
      account = accounts[0];
      console.log("Connected to MetaMask:", account);

      initializeQuiz();
    } catch (error) {
      console.error("Error connecting to MetaMask:", error);
      // openDialog(`Error connecting to MetaMask: ${error.message || error}`);
    }
  } else {
    const errorMessage =
      "MetaMask not found. Please install MetaMask to play the game.";
    console.error(errorMessage);
    openDialog(errorMessage);
  }
}

/*=======================================================================================================================================*/

async function initializeQuiz() {
  let score = 0;
let ashEarned = 0;
  // Initialize quiz data
  quizData = [
    {
      question: "What is the capital of France?",
      options: ["Paris", "Berlin", "Rome", "Madrid"],
      correctIndex: 0,
    },
    {
      question: "Which planet is closest to the Sun?",
      options: ["Mercury", "Venus", "Earth", "Mars"],
      correctIndex: 0,
    },
    {
      question: "Which color of the rainbow do unicorns come in?",
      options: ["Red", "Orange", "Yellow", "Blue"],
      correctIndex: 1,
    },
  ];
  // Update the visibility of elements
  const connectWalletBtn = document.getElementById("connectWalletBtn");
  const metmaskdeets = document.getElementById("metmaskdeets");
  const univedatitle = document.getElementById("univedatitle");
  const quizElement = document.getElementById("quiz");
  const resultElement = document.getElementById("result");
  const redeemRewardBtn = document.getElementById("redeemRewardBtn");

  if (connectWalletBtn && quizElement && resultElement && redeemRewardBtn) {
    connectWalletBtn.style.display = "none";
    metmaskdeets.style.display = "none";
    univedatitle.style.display = "none";
    quizElement.style.display = "block";
    resultElement.innerText = ""; // Clear result text
    redeemRewardBtn.style.display = "block"; // Show redeem button

    loadCurrentQuestion();
  } else {
    console.error("Some of the required elements not found.");
  }
}
/*=======================================================================================================================================*/

function loadCurrentQuestion() {
  const quitButton = document.getElementById("redeemRewardBtn");

  if (currentQuestionIndex < quizData.length) {
    document.getElementById("questionTitle").innerText = quizData[currentQuestionIndex].question;
    document.getElementById("textInput").value = ""; // Clear previous input

    // Show or hide quit button based on the question index
    quitButton.style.display = currentQuestionIndex === 0 ? "none" : "block";
  } else {
    if (currentQuestionIndex === 0) {
      document.getElementById("result").innerText = "No reward earned";
      return;
    }
    redeemReward();
  }
}

document.getElementById("textInput").addEventListener("keyup", function(event) {
  if (event.key === "Enter") {
    selectOption();
  }
});


/*=======================================================================================================================================*/

function selectOption() {
  const userAnswer = document.getElementById("textInput").value;
  const correctAnswer = quizData[currentQuestionIndex].options[quizData[currentQuestionIndex].correctIndex];

  if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
    document.getElementById("result").innerText = "Correct!";
    currentQuestionIndex++;
    score++;
    ashEarned = currentQuestionIndex * 0.1;
    document.getElementById("currentScore").innerText = `Score: ${score}`;
    document.getElementById("earnedASH").innerText = `ASH Earned: ${ashEarned.toFixed(2)}`;

    loadCurrentQuestion();
  } else {
    document.getElementById("result").innerText = "Incorrect! Please try again.";
  }
}

/*=======================================================================================================================================*/
async function redeemReward() {
  if (!redeemedReward) {
    rewards = currentQuestionIndex * 0.1;
    if (currentQuestionIndex === quizData.length) {
      rewards = quizData.length * 0.1;
    }
    console.log("Rewards: ", rewards);
    if (rewards === 0) {
      document.getElementById("result").innerText = "No reward earned";
      return;
    }

    try {
      const tokenContract = new web3.eth.Contract(
        tokenABI,
        tokenContractAddress
      );
      const rewardsInSmallestUnit = web3.utils.toWei(
        rewards.toString(),
        "ether"
      );
      await tokenContract.methods
        .RewardUser(account, rewardsInSmallestUnit)
        .send({ from: account });
      console.log("Yayy");
    } catch (error) {
      console.error("Error transferring ASH:", error);
      document.getElementById("result").innerText = `Error: ${
        error.message || error
      }`;
      return;
    }
    redeemedReward = true;
    document.getElementById("result").innerText = "Rewards Redeemed!";
    document.getElementById("redeemRewardBtn").style.display = "none";
  }
}
document
  .getElementById("connectWalletBtn")
  .addEventListener("click", connectWallet);
document
  .getElementById("redeemRewardBtn")
  .addEventListener("click", redeemReward);
/*=======================================================================================================================================*/
function openDialog(content) {
  const dialogBox = document.getElementById('info-dialog');
  const dialogContent = document.getElementById('dialog-content');

  dialogContent.innerHTML = content;
  dialogBox.style.display = 'flex';
}

function closeDialog() {
  const dialogBox = document.getElementById("info-dialog");
  dialogBox.style.display = "none";
}

function showResultsDialog() {
  const dialogContent = `
    <p>Score: ${score}</p>
    <p>ASH Earned: ${ashEarned.toFixed(2)}</p>
    <button id ="rewardbttn">Redeem Reward</button>`;

  openDialog(dialogContent);
  const rewardButton = document.getElementById('rewardbttn');
  rewardButton.onclick = function() {
    closeDialog();
    // Add logic to change the screen to the thank you screen
    // For example, you can hide the quiz container and display a thank you message
    document.getElementById('quiz').style.display = 'none';
    document.getElementById('thankYouScreen').style.display = 'block'; // Assuming you have a div with id "thankYouScreen"
    document.getElementById("thankYouScore").innerText = `Your score: ${score}`;
    document.getElementById("thankYouASH").innerText = `ASH Earned: ${ashEarned.toFixed(2)}`;
    // rewardButton.disabled = true; // Disable the button after it is clicked
  };

}