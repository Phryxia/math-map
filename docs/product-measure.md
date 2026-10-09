# 곱측도

# 개요

곱측도는 두 측도공간의 데카르트 곱 위에 세운 측도다. 직사각형 $A\times B$ 에 $\mu(A)\nu(B)$ 를 주고, 그런 직사각형이 생성하는 $\sigma$ 대수로 넓힌 것이다. $\sigma$ 유한성 아래에서 이 측도는 하나뿐이고, $\mathbb R^n$ 의 Lebesgue 측도와 독립 확률변수의 결합분포가 이 구성으로 나온다.

# 직관

직선에서 길이를 재는 법을 알고 있을 때 평면에서 면적을 재는 법을 만든다. 직사각형 $A\times B$ 에는 두 변의 길이를 곱해 주면 된다. 삼각형 $T=\lbrace (x,y):0\le x\le 1,\thinspace 0\le y\le x\rbrace$ 는 직사각형이 아니므로 이 규칙이 값을 주지 않는다. 직사각형이 아닌 집합의 면적을 두 길이의 곱만으로 정해야 한다.

$T$ 를 세로선으로 자른다. 위치 $x$ 에서 자른 단면은 구간 $\lbrack 0,x\rbrack$ 이고 길이가 $x$ 다. 단면의 길이를 $x$ 로 적분하면 값이 나온다.

$$
\int\_0^1 x\thinspace dx=\frac12
$$

같은 방법을 직사각형 $A\times B$ 에 쓰면 단면은 $x\in A$ 에서 $B$ 이고 $x\notin A$ 에서 공집합이므로, 적분이 $\int\mathbf 1\_A(x)\nu(B)\thinspace d\mu(x)=\mu(A)\nu(B)$ 로 원래 규칙과 같은 값을 준다. 단면의 측도를 적분하는 것이 직사각형의 규칙을 모든 집합으로 넓힌 방법이고, 이것이 곱측도의 정의다. 남는 문제는 $x\mapsto\nu(E\_x)$ 가 가측인지, 그리고 세로선 대신 가로선으로 잘라도 같은 값이 나오는지다.

# 정의

$(X,\mathcal A,\mu)$ 와 $(Y,\mathcal B,\nu)$ 를 측도공간이라 한다.

**곱 $\sigma$ 대수** $\mathcal A\otimes\mathcal B$ 는 가측 직사각형 $A\times B$ ($A\in\mathcal A$ , $B\in\mathcal B$) 들이 생성하는 $X\times Y$ 위의 $\sigma$ 대수다.

**곱측도** $\mu\times\nu$ 는 $\mathcal A\otimes\mathcal B$ 위의 측도로 가측 직사각형에서 다음을 만족하는 것이다.

$$
(\mu\times\nu)(A\times B)=\mu(A)\nu(B)
$$

여기서 $0\cdot\infty=0$ 으로 읽는다.

## 단면

$E\subseteq X\times Y$ 와 $x\in X$ , $y\in Y$ 에 대해 단면을 다음으로 쓴다.

$$
E\_x=\lbrace y\in Y:(x,y)\in E\rbrace,\qquad E^y=\lbrace x\in X:(x,y)\in E\rbrace
$$

$E\in\mathcal A\otimes\mathcal B$ 이면 모든 $x$ 에서 $E\_x\in\mathcal B$ 이고 모든 $y$ 에서 $E^y\in\mathcal A$ 다.

## 유한 곱과 무한 곱

측도공간이 유한 개면 곱을 차례로 취한다. $\sigma$ 유한일 때 결합법칙 $(\mu\times\nu)\times\pi=\mu\times(\nu\times\pi)$ 가 성립하므로 $\mu\_1\times\cdots\times\mu\_n$ 이 괄호 없이 정해진다.

확률측도는 무한 곱도 갖는다. 확률공간의 모임 $(\Omega\_i,\mathcal F\_i,P\_i)\_{i\in I}$ 에 대해 곱측도 $\bigotimes\_{i\in I}P\_i$ 가 곱공간 $\prod\_i\Omega\_i$ 위에 존재하고, 유한 개의 좌표만 제한하는 통조림집합에서 해당 확률들의 곱을 준다. 일반 측도는 전체 측도가 무한히 곱해지면 발산하므로 무한 곱이 없다.[^3]

# 성질

## 존재와 유일성

$\mu$ 와 $\nu$ 가 $\sigma$ 유한이면 곱측도가 존재하고 유일하다.

증명의 요지. 존재는 직관 절의 공식을 정의로 삼아 얻는다. $E\in\mathcal A\otimes\mathcal B$ 에 대해 $x\mapsto\nu(E\_x)$ 가 $\mathcal A$ 가측임을 가측 직사각형에서 시작해 단조류 정리로 올리고, 다음을 측도로 정의한다.

$$
(\mu\times\nu)(E)=\int\_X\nu(E\_x)\thinspace d\mu(x)
$$

가산 가법성은 [단조 수렴 정리](monotone-convergence.md)로 따라온다. 유일성은 가측 직사각형의 모임이 $\pi$ 계이고 $\mathcal A\otimes\mathcal B$ 를 생성하므로 [측도](measure.md)의 구성과 유일성 절에 적은 Dynkin 의 $\pi\text{-}\lambda$ 정리에서 나온다.

$\sigma$ 유한이 아니면 유일성이 깨진다. $X=Y=\lbrack 0,1\rbrack$ 에 $\mu$ 는 Lebesgue 측도, $\nu$ 는 셈측도를 주면 대각선의 두 반복적분이 $1$ 과 $0$ 이므로 두 값을 각각 주는 측도가 따로 있다. 이 예가 [Fubini–Tonelli 정리](fubini-tonelli.md)에서 $\sigma$ 유한성을 가정하는 이유다.

## Carathéodory 구성과의 일치

가측 직사각형의 유한 합집합 위에 $\mu(A)\nu(B)$ 의 합으로 정의한 집합함수는 전측도이고, 그 외측도로 Carathéodory 확장을 하면 $\sigma$ 유한일 때 위의 반복적분 정의와 일치한다. 두 구성이 같은 측도를 주는 것이 유일성의 결과다.[^2]

## 완비화

완비 측도공간의 곱은 완비가 아니다. $\mathbb R$ 의 Lebesgue 가측집합족을 $\mathcal L(\mathbb R)$ 이라 할 때 다음 포함이 진부분이다.

$$
\mathcal L(\mathbb R)\otimes\mathcal L(\mathbb R)\subsetneq\mathcal L(\mathbb R^2)
$$

$N\subseteq\mathbb R$ 이 Lebesgue 비가측이면 $N\times\lbrace 0\rbrace$ 이 좌변에 들지 않는다. 단면 $(N\times\lbrace 0\rbrace)^0=N$ 이 가측이 아니기 때문이다. 한편 이 집합은 $\mathbb R^2$ 의 Lebesgue 측도로 영집합이므로 우변에 든다.

따라서 $\mathbb R^n$ 의 Lebesgue 측도는 1차원 Lebesgue 측도의 곱측도가 아니라 그 완비화다. 완비 곱측도에 대해 가측인 함수의 단면은 영집합 밖의 $x$ 에서만 가측이고, Fubini 정리의 진술에 "거의 모든 $x$" 가 붙는 것이 이 때문이다.[^1]

## Borel $\sigma$ 대수의 곱

두 번째 가산 위상공간에서는 Borel 쪽에 같은 문제가 없다.

$$
\mathcal B(\mathbb R^m)\otimes\mathcal B(\mathbb R^n)=\mathcal B(\mathbb R^{m+n})
$$

증명의 요지. 열린 직사각형이 $\mathbb R^{m+n}$ 의 열린집합을 가산 합집합으로 만들므로 우변이 좌변에 들고, 사영이 연속이므로 좌변의 생성원이 Borel 집합이어서 반대 포함도 성립한다.

# 활용

- **[Fubini–Tonelli 정리](fubini-tonelli.md).** 곱측도에 대한 적분을 두 반복적분으로 바꾸는 정리다. Tonelli 정리는 비음 가측함수에, Fubini 정리는 곱측도로 적분가능한 함수에 적용된다.
- **$\mathbb R^n$ 의 Lebesgue 측도.** $n$ 차원 측도를 1차원 측도의 곱측도를 완비화해 얻는다. 직육면체에 변의 길이의 곱을 주는 성질이 곱측도의 정의에서 나온다.
- **독립 확률변수의 결합분포.** [확률변수](random-variables.md) $X,Y$ 가 독립이라는 것은 결합분포 $P\_{(X,Y)}$ 가 곱측도 $P\_X\times P\_Y$ 라는 것과 같다. 결합밀도가 두 [확률밀도](probability-density.md)의 곱이 되는 것도 같은 진술이다.
- **무한 곱과 확률과정.** 동전을 무한히 던지는 시행의 확률공간이 $\lbrace 0,1\rbrace^{\mathbb N}$ 위의 무한 곱측도다. 좌표가 독립이 아닌 경우로 넓히면 유한차원 분포들의 정합성에서 과정을 세우는 Kolmogorov 확장정리가 된다.
- **합성곱.** 두 유한측도의 합성곱 $(\mu\ast\nu)(B)=(\mu\times\nu)(\lbrace (x,y):x+y\in B\rbrace)$ 는 곱측도를 덧셈으로 밀어 보낸 [상측도](pushforward-measure.md)다. 독립 확률변수의 합의 분포가 이것이다.

[^1]: Walter Rudin, *Real and Complex Analysis*, 3rd ed., McGraw–Hill, 1987, Chapter 8. 곱측도의 구성과 완비화에서 단면의 가측성.
[^2]: Gerald Folland, *Real Analysis: Modern Techniques and Their Applications*, 2nd ed., Wiley, 1999, Section 2.5.
[^3]: Rick Durrett, *Probability: Theory and Examples*, 5th ed., Cambridge University Press, 2019, Section 2.1. 무한 곱측도와 Kolmogorov 확장정리.

# 연관 문서

## 선수지식

- [측도](measure.md)
- [Lebesgue 적분](lebesgue-integral.md)

## 더 알아보기

- [Fubini–Tonelli 정리](fubini-tonelli.md)

#measure_theory #analysis #probability
