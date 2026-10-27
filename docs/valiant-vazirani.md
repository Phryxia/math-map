# Valiant–Vazirani 정리

# 개요

**Valiant–Vazirani 정리(Valiant–Vazirani theorem)** 는 논리식에 참이 되는 할당이 있는지 묻는 문제를, 그런 할당이 많아야 하나라고 약속된 경우로 무작위로 줄일 수 있다는 정리다. 참인 할당이 여럿인 논리식에서 하나만 남기려면 그 할당을 알아야 할 것 같지만, 할당 $2^n$ 개를 무작위로 $2^k$ 개의 칸에 나누고 $0$ 번 칸에 든 것만 남기면 참인 할당이 $s$ 개일 때 평균 $s/2^k$ 개가 남는다. 이 정리는 [범용 해시족](universal-hashing.md)으로 그런 무작위 제약을 논리식에 더하고 $k$ 를 무작위로 골라, 참인 할당이 정확히 하나 남을 확률이 $1/(8n)$ 이상이 되게 한다.

# 직관

Valiant–Vazirani 정리는 명제논리식 $\varphi$ 를 받아 새 논리식 $\psi$ 를 내는 무작위 다항시간 환원이 있어서, $\varphi$ 가 충족 불가능하면 $\psi$ 도 충족 불가능하고 $\varphi$ 가 충족 가능하면 $\psi$ 의 충족 할당이 정확히 하나일 확률이 $1/(8n)$ 이상이라는 정리다. $n$ 은 $\varphi$ 의 변수 수다. L. G. Valiant 와 V. V. Vazirani 가 1986 년에 증명했다[^1].

해가 하나뿐임이 약속된 입력에서도 충족가능성 문제(satisfiability, SAT)가 무작위 환원 아래에서 어렵다는 것을 보인다. [NP-완전성과 Cook–Levin 정리](np-completeness.md)의 SAT 에 범용 해시족의 무작위 제약을 더하는 것이 증명의 수단이다.

충족 할당이 많은 논리식에서 할당 하나만 남기고 나머지를 지우려 한다. 변수 $n$ 개의 할당 $2^n$ 개를 무작위로 칸 $2^k$ 개에 나누어 넣고 $0$ 번 칸에 든 할당만 남기면, 충족 할당이 $s$ 개일 때 평균 $s/2^k$ 개가 남는다. $2^k$ 가 $s$ 의 두 배에서 네 배 사이이면 평균이 $1/4$ 에서 $1/2$ 사이라서, 정확히 하나가 남을 확률이 상수 이상이다.

$s$ 는 모르므로 $k$ 를 $2$ 부터 $n+1$ 까지에서 무작위로 고른다. 그중 하나는 $s$ 에 맞는 값이고 그 값을 고를 확률이 $1/n$ 이다. 칸에 나누는 규칙은 비트 단위 일차식으로 고르면 "$0$ 번 칸에 든다" 는 조건이 논리식으로 쓰인다.

# 정의

## 유일 충족가능성 문제

**유일 충족가능성 문제(unique satisfiability, USAT)** 는 충족 할당이 정확히 하나인 논리식을 예, 충족 불가능한 논리식을 아니오로 하는 약속 문제(promise problem)다. 충족 할당이 둘 이상인 입력에서는 어떤 답도 허용한다.

## 진술

변수 $x\in\lbrace 0,1\rbrace^n$ 위의 CNF(conjunctive normal form) 논리식 $\varphi$ 에서 다음 $\psi$ 를 만든다.

1. $k\in\lbrace 2,\dots,n+1\rbrace$ 를 균등하게 고른다.
2. $A\in\mathbb F_2^{k\times n}$ 과 $b\in\mathbb F_2^k$ 를 균등하게 고른다.
3. $\psi(x)=\varphi(x)\wedge(Ax+b=0)$ 으로 둔다. 일차식 조건은 보조 변수를 써서 CNF 로 바꾼다.

정리. $\varphi$ 가 충족 불가능하면 $\psi$ 도 충족 불가능하다. $\varphi$ 가 충족 가능하면

$$
\Pr\big\lbrack\ \psi\text{ 의 충족 할당이 정확히 하나다}\ \big\rbrack\ge\frac{1}{8n}
$$

이다.

# 성질

## 증명의 요지

$h(x)=Ax+b$ 는 $\lbrace 0,1\rbrace^n$ 에서 $\lbrace 0,1\rbrace^k$ 로 가는 쌍마다 독립인 해시족이다. $\varphi$ 의 충족 할당 집합을 $S$, $\lvert S\rvert=s$ 라 하고 $p=2^{-k}$ 로 둔다. $x\in S$ 가 유일하게 남을 확률은 $h(x)=0$ 일 확률에서 다른 $y\in S$ 와 함께 $0$ 이 될 확률들을 뺀 것 이상이다. 쌍마다 독립이므로

$$
\Pr\lbrack\text{정확히 하나가 남는다}\rbrack\ge\sum_{x\in S}\Big(p-\sum_{y\in S,\ y\ne x}p^2\Big)\ge sp(1-sp)
$$

이다. $2^{k-2}\le s\le 2^{k-1}$ 인 $k$ 가 $\lbrace 2,\dots,n+1\rbrace$ 에 있고, 그 $k$ 에서 $sp\in\lbrack 1/4,1/2\rbrack$ 이므로 위 확률은 $1/8$ 이상이다. $k$ 를 맞힐 확률 $1/n$ 을 곱한다.

일차식 조건을 CNF 로 바꿀 때 쓰는 보조 변수는 $x$ 가 정해지면 값이 하나로 정해지므로 충족 할당의 수가 바뀌지 않는다.

## 귀결

- 유일 충족가능성 문제에 다항시간 알고리즘이 있으면 $\mathrm{NP}=\mathrm{RP}$ 다. $\mathrm{RP}$ 는 단측 오류 무작위 다항시간(randomized polynomial time) 부류다. 위 환원을 $8n$ 번 되풀이하면 충족 가능한 $\varphi$ 에서 한 번 이상 유일 해 입력을 얻을 확률이 상수 이상이기 때문이다.
- 충족 할당의 수의 홀짝을 판정하는 문제 $\oplus\mathrm{SAT}$ 에서 유일 해 입력의 답은 홀수이고 충족 불가능 입력의 답은 짝수다. 그래서 $\mathrm{NP}\subseteq\mathrm{RP}^{\oplus\mathrm P}$ 이다.

# 활용

- [Toda 정리](toda-theorem.md). [다항 계층](polynomial-hierarchy.md) 전체가 해의 수를 세는 신탁 하나로 다항시간에 풀린다는 정리 $\mathrm{PH}\subseteq\mathrm P^{\char35{}\mathrm P}$ 의 첫 단계가 이 환원을 계층의 각 층에 적용한 것이다[^2]. $\mathrm{PH}$ 는 다항 계층(polynomial hierarchy)이다.
- [고립 보조정리](isolation-lemma.md). 무작위 무게로 최소 해를 하나만 남기는 같은 목표를 해시 대신 무게 합으로 이룬다. 두 방법 모두 해가 여럿인 문제에서 해 하나를 골라내는 데 쓰인다.
- 근사 세기. 칸 수 $2^k$ 를 바꿔 가며 $0$ 번 칸에 할당이 남는지를 보면 충족 할당의 수를 상수배 안에서 추정한다. L. Stockmeyer 의 근사 세기와 SAT 풀이기를 쓰는 해시 기반 모형 세기가 이 방식이다.

[^1]: L. G. Valiant, V. V. Vazirani, "NP is as easy as detecting unique solutions", Theoretical Computer Science 47 (1986), 85–93.
[^2]: S. Toda, "PP is as hard as the polynomial-time hierarchy", SIAM Journal on Computing 20(5) (1991), 865–877.

# 연관 문서

## 선수지식

- [NP-완전성과 Cook–Levin 정리](np-completeness.md)
- [범용 해시족](universal-hashing.md)

## 더 알아보기

- [Toda 정리](toda-theorem.md)

#complexity #algorithms #probability
