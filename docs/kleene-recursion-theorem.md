# Kleene 재귀 정리

# 개요

**Kleene 재귀 정리(Kleene's recursion theorem)** 는 프로그램 번호를 프로그램 번호로 보내는 계산 가능한 전함수 $f$ 마다 $\varphi_{f(e)}=\varphi_e$ 인 번호 $e$ 가 존재한다는 정리다. Kleene 이 1938년에 증명했고 제2 재귀 정리(second recursion theorem)라고도 한다[^1]. 이 정리로 자기 번호를 계산에 쓰는 프로그램이 존재함이 보장되고, [Rice 정리](rice-theorem.md)와 여러 결정 불가능성 결과가 이 정리에서 짧게 증명된다.

# 직관

자기 자신의 코드를 그대로 출력하는 프로그램을 쓰려고 한다. "다음 글을 출력하라: …" 의 빈칸에 이 프로그램 전체를 적으면, 적은 글 안에 다시 "다음 글을 출력하라: …" 가 들어가고 그 빈칸에 또 전체를 적어야 한다. 프로그램은 끝없이 길어지고 완성되지 않는다.

빈칸에 프로그램 전체를 넣으려 해서 막혔으니, 빈칸에는 프로그램의 절반만 넣고 그 절반을 두 번 쓴다. 명령 $C$ 를 "받은 글을 인용 부호로 감싸 적고, 그 뒤에 받은 글을 그대로 붙여 출력하라" 로 정한다. 프로그램은 $C$ 를 인용 부호로 감싼 것 뒤에 $C$ 를 붙인 글이다. 이 프로그램을 실행하면 $C$ 가 인용된 $C$ 를 받아 "인용된 $C$ 뒤에 $C$" 를 출력하고, 출력이 프로그램 자신과 같다.

이 구성은 [정지 문제](halting-problem.md)의 증명에서 프로그램에게 자기 자신의 문자열을 입력으로 준 것과 같은 수다. 출력하는 대신 다른 계산에 넘기면 자기 번호를 받아 계산에 쓰는 프로그램이 나온다. 그런 프로그램이 항상 존재한다는 것이 이 정리이고, 프로그램을 고쳐 쓰는 절차 $f$ 가 무엇이든 고친 뒤에도 같은 함수를 계산하는 프로그램이 있다는 꼴로 진술된다.

# 정의

계산 가능한 부분함수 전체의 번호 붙이기 $\varphi_0,\varphi_1,\varphi_2,\dots$ 는 정지 문제의 것을 쓴다. 두 부분함수 $\alpha,\beta$ 에 대해 $\alpha(y)\simeq\beta(y)$ 는 양쪽이 모두 정의되지 않거나, 모두 정의되어 값이 같다는 뜻이다.

**s-m-n 정리(s-m-n theorem).** 두 변수의 계산 가능한 부분함수 $\psi(x,y)$ 마다 계산 가능한 전함수 $s$ 가 존재해 모든 $x,y$ 에서

$$
\varphi_{s(x)}(y)\simeq\psi(x,y)
$$

이다. $s(x)$ 는 "입력 $y$ 를 받아 $\psi(x,y)$ 를 계산하는 프로그램" 의 번호이고, $x$ 를 프로그램 안에 상수로 적어 넣는 절차가 $s$ 다.

계산 가능한 전함수 $f:\mathbb N\to\mathbb N$ 에 대해 $\varphi_{f(e)}=\varphi_e$ 인 $e$ 를 $f$ 의 **고정점(fixed point)** 이라 한다. 같아야 하는 것은 번호 $e$ 와 $f(e)$ 가 아니라 두 번호가 계산하는 부분함수다.

# 성질

## Kleene 재귀 정리

**정리 (Kleene, 1938).** 계산 가능한 전함수 $f$ 는 고정점을 갖는다. 곧 $\varphi_{f(e)}=\varphi_e$ 인 $e$ 가 존재한다.

증명의 요지. s-m-n 정리를 $\psi(x,y)\simeq\varphi_{\varphi_x(x)}(y)$ 에 적용해 계산 가능한 전함수 $d$ 를 얻는다. $\varphi_x(x)$ 가 정의되면 $\varphi_{d(x)}=\varphi_{\varphi_x(x)}$ 이고, 정의되지 않으면 $\varphi_{d(x)}$ 는 어디에서도 정의되지 않는다. $f\circ d$ 는 계산 가능한 전함수이므로 어떤 $v$ 에서 $f\circ d=\varphi_v$ 이고, $\varphi_v(v)$ 는 정의된다. $e=d(v)$ 로 두면

$$
\varphi_e=\varphi_{d(v)}=\varphi_{\varphi_v(v)}=\varphi_{f(d(v))}=\varphi_{f(e)}
$$

이다. ∎

$d$ 와 $v$ 를 구하는 절차가 모두 계산 가능하므로 고정점 $e$ 는 $f$ 의 번호로부터 계산된다. 이 꼴의 진술을 Rogers 고정점 정리(Rogers's fixed-point theorem)라고도 한다[^2].

## 자기 번호를 쓰는 프로그램

**따름정리.** 두 변수의 계산 가능한 부분함수 $\psi(e,x)$ 마다 모든 $x$ 에서 $\varphi_e(x)\simeq\psi(e,x)$ 인 $e$ 가 존재한다.

s-m-n 정리로 $\varphi_{s(e)}(x)\simeq\psi(e,x)$ 인 계산 가능한 전함수 $s$ 를 얻고, $s$ 의 고정점 $e$ 를 잡으면 $\varphi_e(x)\simeq\varphi_{s(e)}(x)\simeq\psi(e,x)$ 다. 프로그램 $e$ 는 계산 도중에 자기 번호 $e$ 를 쓸 수 있다.

예 둘이 이 따름정리에서 나온다.

- $\psi(e,x)=e$ 이면 모든 입력에서 자기 번호를 출력하는 프로그램이 존재한다. 이런 프로그램을 **콰인(quine)** 이라 한다.
- $\psi(e,x)$ 를 $x=e$ 일 때 $0$, 그 밖에는 정의되지 않음으로 두면 $W_e=\lbrace e\rbrace$ 인 $e$ 가 존재한다. $W_e$ 는 정지 문제에서 정의한 $\varphi_e$ 의 정의역이다.

## 고정점이 없는 함수의 계산 불가능성

$\varphi_{g(e)}\ne\varphi_e$ 가 모든 $e$ 에서 성립하는 $g$ 를 **고정점 없는 함수(fixed-point-free function)** 라 한다. 계산 가능한 전함수는 재귀 정리로 고정점을 가지므로 고정점 없는 전함수는 계산 가능하지 않다. 정지 집합 $K$ 로 $\varphi_e(e)$ 가 정의되는지 물어, 정의되면 그 값에 $1$ 을 더한 상수 함수의 번호를, 정의되지 않으면 상수 $0$ 함수의 번호를 내는 함수는 고정점 없는 함수다. 그래서 고정점 없는 함수를 계산하는 집합의 [Turing 차수](turing-degrees.md)는 $\mathbf 0$ 보다 크다. 계산 가능하게 열거 가능한 집합에서는 이 차수가 정확히 $\mathbf 0'$ 이고, 이것이 [Arslanov 완비성 판정법](arslanov-completeness-criterion.md)이다.

## 영역 이론의 고정점 정리와의 구별

[영역 이론](domain-theory.md)의 Kleene 고정점 정리는 연속 함수의 최소 고정점을 반복의 극한으로 구성하는 순서론의 정리다. 재귀 정리는 순서 구조를 쓰지 않고 번호 붙이기와 s-m-n 정리만 쓰며, 얻는 고정점이 최소라는 보장도 없다. 두 정리는 재귀 정의에 의미를 주는 데 함께 쓰이지만 진술과 증명이 다르다.

# 활용

- Rice 정리. 비자명한 의미론적 성질 $P$ 의 집합 $I_P$ 가 결정 가능하다고 하고 $a\in I_P$, $b\notin I_P$ 를 고른다. $e\in I_P$ 이면 $b$, 아니면 $a$ 를 내는 $f$ 는 계산 가능한 전함수다. 고정점 $e$ 에서 $\varphi_e=\varphi_{f(e)}$ 이므로 $e$ 와 $f(e)$ 는 $I_P$ 에 함께 속하거나 함께 속하지 않는다. 그런데 $e\in I_P$ 이면 $f(e)=b\notin I_P$ 이고 $e\notin I_P$ 이면 $f(e)=a\in I_P$ 이므로 모순이다.
- [Gödel 불완전성 정리](godel-incompleteness.md). 대각선 보조정리는 산술의 논리식에 대한 같은 구성이다. 논리식이 자기 부호를 대입받는 자리가 프로그램이 자기 번호를 받는 자리에 대응한다.
- [Lambda calculus](lambda-calculus.md). 고정점 combinator $Y$ 는 항 $g$ 마다 $Y\thinspace g=\_\beta g\thinspace(Y\thinspace g)$ 를 주고, 재귀 함수를 자기 자신을 인자로 받는 함수의 고정점으로 정의한다. 재귀 정리는 같은 일을 프로그램 번호 위에서 한다.
- 계산 가능성 이론의 구성. 우선순위 논법(priority method)으로 집합을 구성할 때, 구성 중인 집합의 번호를 구성 안에서 쓰는 단계에 이 정리가 쓰인다.

[^1]: S. C. Kleene, On notation for ordinal numbers, *Journal of Symbolic Logic* **3** (1938), 150–155.
[^2]: H. Rogers, *Theory of Recursive Functions and Effective Computability* (1967), 11.2절. R. I. Soare, *Recursively Enumerable Sets and Degrees* (1987), II.3절.

# 연관 문서

## 선수지식

- [정지 문제](halting-problem.md)

## 더 알아보기

- [Arslanov 완비성 판정법](arslanov-completeness-criterion.md)

#computation #logic #theorem
