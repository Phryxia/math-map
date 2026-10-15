# Kummer 이론

# 개요

체 $K$ 가 $1$ 의 원시 $n$ 제곱근을 품고 표수가 $n$ 을 나누지 않으면, $K$ 의 지수 $n$ 아벨 확대가 군 $K^{\times}/(K^{\times})^{n}$ 의 부분군과 일대일로 대응한다. 확대는 모두 $n$ 제곱근을 붙여 얻는다.

대응은 Galois 군과 그 부분군 사이의 완전쌍으로 적히고, 쌍의 비퇴화가 [Hilbert 정리 90](hilbert-theorem-90.md)에서 나온다.

# 직관

$\mathbb Q$ 의 이차확대를 전부 적으려 한다. 제곱인자 없는 정수 $d\ne1$ 마다 $\mathbb Q(\sqrt d)$ 가 하나씩이고 서로 다르다. 곧 이차확대가 $\mathbb Q^{\times}/(\mathbb Q^{\times})^{2}$ 의 자명하지 않은 원소와 하나씩 짝지어진다.

같은 것을 삼차에서 해 본다. $\mathbb Q(2^{1/3})$ 은 $x^3-2$ 의 세 근 가운데 실근 하나만 품으므로 Galois 확대가 아니다. 나머지 두 근은 실근에 $1$ 의 원시 세제곱근 $\zeta$ 를 곱한 것이고, $\zeta$ 가 $\mathbb Q$ 에 없어서 생긴 일이다.

$\zeta$ 를 바닥 체에 넣으면 $x^n-a$ 의 근 $\zeta^{i}a^{1/n}$ 이 전부 $K(a^{1/n})$ 에 들어가 확대가 Galois 가 된다. $\sigma$ 가 $a^{1/n}$ 을 어느 근으로 보내는지가 $\zeta$ 의 거듭제곱 하나를 정하므로 Galois 군이 $\mu_n$ 의 부분군으로 들어가고, 이차의 그림이 그대로 올라간다.

# 정의

$K$ 를 표수가 $n$ 을 나누지 않는 체, $\mu_n\subseteq K$ 를 $1$ 의 $n$ 제곱근 전체라 한다. $\mu_n$ 은 위수 $n$ 의 순환군이다.

## Kummer 확대

$L/K$ 가 아벨 확대이고 $\mathrm{Gal}(L/K)$ 의 모든 원소의 위수가 $n$ 을 나누면 $L/K$ 를 **지수 $n$ 의 Kummer 확대**라 한다.

## Kummer 쌍

$\Delta$ 를 $(K^{\times})^{n}\subseteq\Delta\subseteq K^{\times}$ 인 부분군이라 하고 $L=K(\Delta^{1/n})$ 을 $\Delta$ 의 원소들의 $n$ 제곱근을 모두 붙인 체라 한다. 다음이 **Kummer 쌍**이다.

$$
\mathrm{Gal}(L/K)\times\Delta/(K^{\times})^{n}\longrightarrow\mu_n,
\qquad
(\sigma,a)\longmapsto\frac{\sigma(a^{1/n})}{a^{1/n}}
$$

값은 $a^{1/n}$ 의 선택에 의존하지 않고 양쪽 변수에 대해 준동형이다.

# 성질

## 대응 정리

**정리.** $\Delta\mapsto K(\Delta^{1/n})$ 이 $(K^{\times})^{n}$ 을 품는 $K^{\times}$ 의 부분군과 $K$ 의 지수 $n$ 아벨 확대 사이의 포함관계를 보존하는 전단사다.[^1]

역대응은 $L\mapsto\Delta=\lbrace a\in K^{\times}:a^{1/n}\in L\rbrace$ 다. $\Delta/(K^{\times})^{n}$ 이 유한하면 $\lbrack L:K\rbrack$ 가 그 위수와 같다.

## 쌍의 비퇴화

Kummer 쌍은 양쪽에서 비퇴화이고, 유한한 경우 $\mathrm{Gal}(L/K)$ 와 $\Delta/(K^{\times})^{n}$ 이 서로의 지표군이다.

$\sigma$ 쪽의 비퇴화는 Galois 대응에서 나온다. $a$ 쪽, 곧 모든 $\sigma$ 에서 값이 $1$ 인 $a$ 가 $(K^{\times})^{n}$ 에 든다는 것은 $a^{1/n}$ 이 $K$ 에 남는다는 뜻이다.

## 순환 확대의 생성

**따름정리.** $L/K$ 가 차수 $n$ 의 순환 확대면 $L=K(a^{1/n})$ 인 $a\in K^{\times}$ 가 있다.

증명은 Hilbert 정리 90 이다. 생성원 $\sigma$ 에 대해 $N_{L/K}(\zeta^{-1})=\zeta^{-n}=1$ 이므로 $\zeta^{-1}=\sigma(b)/b$ 인 $b\in L^{\times}$ 가 있고, 이 $b$ 는 $\sigma(b)=\zeta b$ 를 만족한다. $\sigma(b^{n})=b^{n}$ 이므로 $a=b^{n}$ 이 $K$ 에 들고, $b$ 의 켤레 $\zeta^{i}b$ 가 서로 다르므로 $b$ 가 차수 $n$ 의 원소라 $L=K(b)$ 다.

## 표수 $p$ 의 경우

표수가 $p$ 인 체에서는 $\mu_p$ 가 자명해 위 대응이 없다. 지수 $p$ 의 아벨 확대는 대신 $x^{p}-x=a$ 의 근으로 생성되고, 대응하는 군이 $K/\wp(K)$ 다. 여기서 $\wp(x)=x^{p}-x$ 다. 이것이 Artin–Schreier 이론이고, 비퇴화의 근거는 가법 판본의 Hilbert 정리 90 이다.

# 활용

- **유체론.** 유체론의 고전적 증명은 바닥 체에 $1$ 의 거듭제곱근을 붙여 Kummer 확대로 만든 뒤 상호법칙을 그 안에서 세우고 내려오는 순서를 따른다.
- **타원곡선의 하강.** 곱셈 $\lbrack n\rbrack$ 이 주는 짧은 완전열에서 나오는 연결 준동형이 Kummer 쌍과 같은 모양이고, 그 상이 [Selmer 군](selmer-tate-shafarevich.md)을 거쳐 Mordell–Weil 군의 계수를 재는 데 쓰인다.
- **이차체의 분류.** $n=2$ 에서 대응이 제곱인자 없는 정수와 이차체의 짝짓기가 된다. [이차 상호법칙](quadratic-reciprocity.md)이 그 확대에서 소수가 어떻게 분해되는지를 정한다.
- **분기의 계산.** $K(a^{1/n})/K$ 에서 어느 소수가 분기하는지가 $a$ 의 소인수 지수가 $n$ 으로 나누어지는지로 읽히므로, 확대의 도체를 $a$ 에서 바로 계산한다.

[^1]: S. Lang, *Algebra*, 개정 3판, Graduate Texts in Mathematics 211, Springer, 2002, 6 장 8 절. Artin–Schreier 이론은 같은 장 6 절에 있다.

# 연관 문서

## 선수지식

- [Hilbert 정리 90](hilbert-theorem-90.md)

## 더 알아보기

아직 연결한 문서가 없다.

#field_theory #algebra #number_theory #group_theory
