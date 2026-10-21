# Arslanov 완비성 판정법

# 개요

**Arslanov 완비성 판정법(Arslanov's completeness criterion)** 은 계산 가능하게 열거 가능한 집합 $A$ 가 정지 집합 $K$ 를 계산하는 것과 $A$ 가 고정점 없는 함수를 계산하는 것이 동치라는 정리다. Arslanov 가 1981년에 증명했다[^1]. [Kleene 재귀 정리](kleene-recursion-theorem.md)가 계산 가능한 함수에 고정점을 주는 것을 [Turing 차수](turing-degrees.md)로 넓혀, 계산 가능하게 열거 가능한 차수 가운데 $\mathbf 0'$ 보다 낮은 것은 모두 재귀 정리를 만족한다는 결론을 준다.

# 직관

Kleene 재귀 정리에서 고정점 없는 함수 $g$, 곧 모든 $e$ 에서 $\varphi_{g(e)}\ne\varphi_e$ 인 함수는 계산 가능하지 않았다. 정지 집합 $K$ 를 쓰면 그런 $g$ 를 계산할 수 있었다. $\varphi_e(e)$ 가 정의되는지 $K$ 로 묻고, 정의되면 그 값에 $1$ 을 더한 상수 함수의 번호를 내면 된다.

$K$ 보다 약한 정보로도 $g$ 를 계산할 수 있는지 묻는다. 정보원 $A$ 가 계산 가능하게 열거 가능하면 $A$ 의 원소는 단계마다 하나씩 들어오고, 단계 $s$ 까지 들어온 원소로 계산한 $g$ 의 값은 나중에 틀릴 수 있다. 재귀 정리를 쓰면, 어떤 수 $x$ 가 $K$ 에 들어오는 순간 그때의 $g$ 의 추측값을 고정점으로 만드는 프로그램을 짤 수 있다. 그러면 $g$ 는 고정점을 갖지 않으므로 그 추측은 반드시 틀리고, $A$ 가 그 뒤에 바뀌어야 한다. $A$ 의 변화가 $x$ 의 $K$ 소속을 알려 주므로 $A$ 가 $K$ 를 계산한다.

# 정의

$A$ 를 신탁으로 쓰는 프로그램이 계산하는 함수를 $A$ 로 계산 가능하다고 한다. 전함수 $g$ 가 모든 $e$ 에서 $\varphi_{g(e)}\ne\varphi_e$ 를 만족하면 $g$ 는 **고정점 없는 함수(fixed-point-free function)** 다.

전함수 $h$ 가 $\varphi_e(e)$ 가 정의되는 모든 $e$ 에서 $h(e)\ne\varphi_e(e)$ 를 만족하면 $h$ 는 **대각선 비계산 함수(diagonally noncomputable function)** 다.

# 성질

## Arslanov 완비성 판정법

**정리 (Arslanov, 1981).** 계산 가능하게 열거 가능한 집합 $A$ 에 대해 다음은 동치다.

1. $K\le_T A$.
2. $A$ 로 계산 가능한 고정점 없는 함수가 존재한다.

1에서 2. 직관 절에서 $K$ 로 만든 함수가 고정점 없는 함수다.

2에서 1의 증명의 요지. $A$ 를 단계마다 한 원소씩 열거한 것을 $A\_0\subseteq A\_1\subseteq\cdots$ 라 하고, $g=\Phi^A$ 를 $A\_s$ 로 $s$ 단계까지 계산한 근삿값을 $g\_s$ 라 한다. 매개변수를 붙인 재귀 정리(recursion theorem with parameters)로 계산 가능한 전함수 $n(x)$ 를 잡아, $x$ 가 단계 $s$ 에 $K$ 에 들어오면 그 뒤 처음 정의되는 근삿값으로 $\varphi_{n(x)}=\varphi_{g\_s(n(x))}$ 이고 들어오지 않으면 $\varphi_{n(x)}$ 가 어디에서도 정의되지 않게 한다. $A$ 로는 $g(n(x))$ 의 계산이 쓰는 $A$ 의 부분이 더 바뀌지 않는 단계 $t$ 를 찾을 수 있다. $x$ 가 $t$ 뒤의 단계 $s$ 에 $K$ 에 들어오면 $g\_s(n(x))=g(n(x))$ 이므로 $n(x)$ 가 $g$ 의 고정점이 되어 모순이다. 따라서 $x\in K$ 인 것은 $x$ 가 단계 $t$ 까지 $K$ 에 들어온 것과 같고, $A$ 로 $K$ 가 판정된다. ∎

$A$ 가 계산 가능하게 열거 가능하다는 가정은 빠질 수 없다. 계산 가능하게 열거 가능하지 않은 집합 가운데에는 $K$ 를 계산하지 않으면서 고정점 없는 함수를 계산하는 것이 있다. $\mathbf 0'$ 보다 낮은 [PA 차수](pa-degrees.md)(Peano arithmetic)의 원소가 그 예다.

## 대각선 비계산 함수와의 동치

집합 $B$ 가 고정점 없는 함수를 계산하는 것과 대각선 비계산 함수를 계산하는 것은 동치다(Jockusch, Lerman, Soare, Solovay, 1989)[^2]. 대각선 비계산 함수 $h$ 에서는 $h(e)$ 를 값으로 갖는 상수 함수의 번호를 내면, 그 번호가 계산하는 함수는 입력 $e$ 에서 $\varphi_e(e)$ 와 다른 값을 가지므로 $\varphi_e$ 와 다르다. 반대 방향은 재귀 정리를 써서 증명된다.

따라서 Arslanov 판정법은 "계산 가능하게 열거 가능한 집합이 $K$ 를 계산하는 것은 대각선 비계산 함수를 계산하는 것과 동치다" 로도 진술된다.

## 재귀 정리의 상대화

$A$ 가 계산 가능하게 열거 가능하고 $K\not\le_T A$ 이면, $A$ 로 계산 가능한 모든 전함수 $f$ 는 $\varphi_{f(e)}=\varphi_e$ 인 $e$ 를 갖는다. 정리의 2에서 1 방향의 대우다. Friedberg–Muchnik 정리의 집합처럼 $\mathbf 0$ 과 $\mathbf 0'$ 사이에 있는 계산 가능하게 열거 가능한 차수에서는 Kleene 재귀 정리가 그대로 성립한다.

# 활용

- Turing 차수의 완비성 판정. 계산 가능하게 열거 가능한 집합이 $\mathbf 0'$ 차수인지 보일 때 $K$ 를 직접 환원하는 대신 고정점 없는 함수나 대각선 비계산 함수를 그 집합으로 계산해 보인다.
- PA 차수. PA 차수는 $\lbrace 0,1\rbrace$ 값의 대각선 비계산 함수를 계산하는 차수와 같다. Arslanov 판정법으로 계산 가능하게 열거 가능한 PA 차수는 $\mathbf 0'$ 하나뿐이다.
- [Martin-Löf 무작위성](martin-lof-randomness.md). Kučera 는 Martin-Löf 무작위인 수열이 대각선 비계산 함수를 계산함을 보였고, Arslanov 판정법과 합쳐 계산 가능하게 열거 가능한 집합이 무작위 수열을 계산하면 $K$ 를 계산한다는 결론을 얻었다.

[^1]: M. M. Arslanov, Some generalizations of a fixed-point theorem, *Izvestiya Vysshikh Uchebnykh Zavedenii. Matematika* (1981), no. 5, 9–16.
[^2]: C. G. Jockusch, M. Lerman, R. I. Soare, R. M. Solovay, Recursively enumerable sets modulo iterated jumps and extensions of Arslanov's completeness criterion, *Journal of Symbolic Logic* **54** (1989), 1288–1323.

# 연관 문서

## 선수지식

- [Kleene 재귀 정리](kleene-recursion-theorem.md)
- [Turing 차수](turing-degrees.md)

## 더 알아보기

아직 연결한 문서가 없다.

#computation #logic #theorem
