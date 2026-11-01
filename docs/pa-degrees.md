# PA 차수

# 개요

**PA**(Peano arithmetic) **차수(PA degree)** 는 산술 문장마다 참이나 거짓을 모순 없이 골라 주는 계산 장치가 갖는 계산 능력이다. Peano 산술의 문장을 차례로 받아, 앞에서 고른 것과 함께 모순이 증명되지 않도록 참이나 거짓을 고르는 절차를 생각한다. $0=1$ 은 거짓, $1+1=2$ 는 참으로 고르면 되지만, 증명도 반증도 되지 않는 문장에서는 고를 근거가 없고 계산가능한 절차로는 이 선택을 끝까지 이어 갈 수 없다. PA 차수는 이 선택을 해 주는 오라클(oracle)의 [Turing 차수](turing-degrees.md)로 정의하고, 어떤 계산 문제가 이 오라클로 풀리는지를 차수의 비교로 다룬다.

# 직관

[Peano 공리](peano-axioms.md)로 적히는 모든 문장을 참거짓으로 가르는 표를 만들려 한다. 공리에서 증명되는 문장에는 참, 반증되는 문장에는 거짓을 적고, 남은 문장은 아무렇게나 정하되 모순이 생기지 않게 한다. 증명되는 문장의 집합과 반증되는 문장의 집합은 증명을 차례로 훑어 열거할 수 있고, 공리가 모순을 증명하지 않으므로 겹치지 않는다.

표를 계산으로 만들려 하면 막힌다. 문장 하나를 받아 증명과 반증을 동시에 찾기 시작하면 둘 중 하나가 나오는 문장에서는 답이 나오지만, 어느 쪽도 나오지 않는 문장에서는 탐색이 끝나지 않는다. 멈추지 않는 것과 아직 멈추지 않은 것을 구별할 방법이 없으므로 이 절차는 모든 문장에 답하지 못한다. 다른 절차로 표를 계산할 수 있다면 그 표는 계산으로 나열되는 공리로 이루어진 완전하고 모순 없는 이론이 되는데, [Gödel 불완전성 정리](godel-incompleteness.md)는 그런 이론이 없다는 정리다.

표를 주는 오라클이 얼마나 강해야 하는지 재 본다. [정지 문제](halting-problem.md)를 오라클로 쓰면 충분하다. 문장마다 증명 탐색이 멈추는지 물어 증명되는 문장과 반증되는 문장을 가려내고, 남은 문장을 번호 순으로 하나씩 정하면서 그때까지의 선택과 함께 모순이 증명되는지를 다시 오라클에 묻는다.

정지 문제보다 약한 오라클로도 표를 만들 수 있는지가 남는다. 표 하나는 무한 이진열 하나이고, 모순이 없는 표 전체는 [Π⁰₁ 부류](pi01-classes.md)를 이룬다. 그래서 이 물음은 그 부류의 원소가 어느 차수에서 나오는지의 물음이 된다.

# 정의

Peano 산술의 문장 집합 $T$ 가 Peano 공리를 모두 포함하고, $T$ 에서 모순이 증명되지 않고, 모든 문장 $\sigma$ 에 대해 $\sigma\in T$ 와 $\neg\sigma\in T$ 가운데 하나가 성립하면 $T$ 를 Peano 산술의 **완전하고 일관된 확장(complete consistent extension)** 이라 한다. 문장에 번호를 붙여 $T$ 를 $n$ 번 문장이 $T$ 에 드는 $n$ 의 집합 $T\subseteq\omega$ 로 본다. 직관 절의 표가 이것이다.

Turing 차수 $\mathbf a$ 가 **PA 차수** 라는 것은 $\mathbf a$ 가 Peano 산술의 완전하고 일관된 확장 하나를 계산한다는 뜻이다. 직관 절의 절차로 $\mathbf 0'$ 은 PA 차수이고, 계산가능한 차수 $\mathbf 0$ 은 PA 차수가 아니다.

부분함수 $\psi$ 가 계산가능하고 치역이 $\lbrace 0,1\rbrace$ 에 들어갈 때, 전함수 $f\colon\omega\to\lbrace 0,1\rbrace$ 가 $\psi(n)$ 이 정의되는 모든 $n$ 에서 $f(n)=\psi(n)$ 을 만족하면 $f$ 를 $\psi$ 의 **전확장(total extension)** 이라 한다. $\varphi\_e$ 를 $e$ 번 프로그램이 계산하는 부분함수라 하고 $\psi(e)=\varphi\_e(e)$ 를 값이 $0$ 이나 $1$ 일 때만 정의한다. $f(e)$ 를 "$\varphi\_e(e)$ 가 멈추고 값이 $0$ 이나 $1$ 이면 그 값, 아니면 $0$" 으로 두면 $f$ 는 $\psi$ 의 전확장이고, 멈춤 여부를 묻는 데 정지 문제를 쓰므로 $\mathbf 0'$ 이 $f$ 를 계산한다.

집합족 $\mathcal S\subseteq 2^{\omega}$ 가 다음 세 조건을 만족하면 **Scott 집합(Scott set)** 이라 한다.

- $X\in\mathcal S$ 이고 $Y\le\_T X$ 이면 $Y\in\mathcal S$ 다.
- $X,Y\in\mathcal S$ 이면 $X\oplus Y\in\mathcal S$ 다.
- $\mathcal S$ 에 든 무한 이진 나무는 $\mathcal S$ 에 든 경로를 갖는다.

$2^{\omega}$ 전체는 Scott 집합이다. 계산가능한 집합 전체는 앞의 두 조건을 만족하지만 Scott 집합이 아니다. 직관 절의 모순 없는 표들을 가지로 갖는 계산가능한 무한 이진 나무가 있고, 그 가지는 계산가능하지 않으므로 셋째 조건이 성립하지 않는다.

Peano 산술의 모형 $M$ 이 자연수 $\mathbb N$ 과 동형이 아니면 **비표준 모형(nonstandard model)** 이라 하고, $M$ 의 원소 $c$ 가 코딩하는 자연수 집합 $\lbrace n\in\mathbb N : M\models p\_n\mid c\rbrace$ 를 모두 모은 집합족을 $M$ 의 **표준 체계(standard system)** 라 한다. 여기서 $p\_n$ 은 $n$ 번째 소수다.

# 성질

## 세 특성화의 동치

차수 $\mathbf a$ 에 대해 다음 셋은 동치다.[^1]

- $\mathbf a$ 가 PA 차수다.
- 모든 부분계산가능 $\lbrace 0,1\rbrace$ 값 함수가 $\mathbf a$ 로 계산되는 전확장을 갖는다.
- 비어 있지 않은 모든 $\Pi^0\_1$ 부류가 $\mathbf a$ 로 계산되는 원소를 갖는다.

셋째에서 첫째는 완전하고 일관된 확장 전체가 비어 있지 않은 $\Pi^0\_1$ 부류라는 데서 나온다. 첫째에서 둘째는 $\psi(n)=1$ 을 산술 문장으로 적고, 완전 확장이 그 문장을 포함하면 $f(n)=1$, 아니면 $f(n)=0$ 으로 두어 얻는다. 참인 이런 문장과 $\psi(n)=0$ 일 때의 부정은 Peano 산술에서 증명되므로 $f$ 는 $\psi$ 의 전확장이다. 둘째에서 셋째는 계산가능한 나무에서 가지를 한 칸씩 고를 때, 마디 $\sigma$ 위의 오른쪽 부분나무가 유한함이 먼저 드러나면 $0$, 왼쪽이 먼저 드러나면 $1$ 로 두는 부분함수를 쓴다. 그 전확장이 $0$ 이면 왼쪽, $1$ 이면 오른쪽으로 내려가 무한한 쪽을 따라간다.

## 위로 닫힘

$\mathbf a$ 가 PA 차수이고 $\mathbf a\le\mathbf b$ 이면 $\mathbf b$ 도 PA 차수다. $\mathbf a$ 가 계산하는 완전 확장은 $\mathbf b$ 도 계산한다.

$\mathbf 0'$ 보다 진짜 낮은 PA 차수가 있다. 완전하고 일관된 확장 전체는 비어 있지 않은 $\Pi^0\_1$ 부류이므로 저차 기저 정리(low basis theorem)에 따라 $A'\equiv\_T\mathbf 0'$ 인 원소 $A$ 를 갖는다. $A\equiv\_T\mathbf 0'$ 이면 $A'\equiv\_T\mathbf 0''$ 이 되므로 $A$ 의 차수는 $\mathbf 0'$ 보다 진짜 낮다.

## 최소 원소의 부재

PA 차수의 모임에 최소 원소가 없다. $\mathbf a$ 가 PA 차수이면 $\mathbf b\lt \mathbf a$ 인 PA 차수 $\mathbf b$ 가 있다.[^2]

증명의 요지. Peano 산술에 술어 기호 하나와 그 술어가 $X$ 를 나타낸다는 문장들을 더한 이론을 $X$ 에 상대화한 Peano 산술이라 한다. $X$ 가 완전하고 일관된 확장이고 $Y$ 가 $X$ 에 상대화한 Peano 산술의 완전하고 일관된 확장인 쌍 $X\oplus Y$ 전체는 비어 있지 않은 $\Pi^0\_1$ 부류이고, $\mathbf a$ 는 그 원소 하나를 계산한다. $\mathbf 0$ 이 PA 차수가 아니라는 사실을 $X$ 에 상대화하면 $Y\not\le\_T X$ 다. $\mathbf a\le\_T X$ 이면 $Y\le\_T X$ 가 되므로 $X\lt\_T\mathbf a$ 이고, $X$ 의 차수가 $\mathbf a$ 보다 진짜 낮은 PA 차수다.

PA 차수는 Turing 차수의 순서에서 위로 닫힌 모임이면서 아래 끝이 없다.

## 계산가능 열거 차수와의 관계

계산가능 열거(computably enumerable) 집합의 차수 가운데 PA 차수인 것은 $\mathbf 0'$ 뿐이다.[^2]

$A$ 가 계산가능 열거이고 PA 차수이면, 정의 절의 예 $\psi(e)=\varphi\_e(e)$ 에서 $1-\psi$ 의 전확장 $f$ 를 $A$ 가 계산한다. 이 $f$ 는 $\varphi\_e(e)$ 가 정의되는 모든 $e$ 에서 $f(e)\ne\varphi\_e(e)$ 이고, 여기서 $W\_{g(e)}\ne W\_e$ 가 모든 $e$ 에서 성립하는 $A$-계산가능 함수 $g$ 가 나온다. [Arslanov 완비성 판정법](arslanov-completeness-criterion.md)에 따라 그런 $g$ 를 계산하는 계산가능 열거 집합은 $A\equiv\_T\mathbf 0'$ 이다.

그러므로 저차 기저 정리로 얻은 PA 차수는 계산가능 열거 집합의 차수가 아니다.

## Scott 집합과 비표준 모형

모든 Scott 집합은 PA 차수의 원소를 포함한다. 완전하고 일관된 확장을 가지로 갖는 계산가능 무한 이진 나무를 $T$ 라 하면 첫 조건에서 $T\in\mathcal S$ 이고, 셋째 조건에서 $T$ 의 경로 하나가 $\mathcal S$ 에 있다. 그 경로가 완전하고 일관된 확장이다.

가산 Scott 집합은 정확히 Peano 산술의 가산 비표준 모형의 표준 체계다.[^3] 표준 체계가 세 조건을 만족하는 것은 $M$ 안에서 귀납법과 코딩이 성립하는 데서 나오고, 거꾸로 가산 Scott 집합마다 그것을 표준 체계로 갖는 모형이 구성된다.

두 정리에 따라 Peano 산술의 비표준 모형은 모두 PA 차수의 집합을 코딩한다.

# 활용

- Π⁰₁ 부류의 기저 정리를 적용하는 대표적인 부류가 완전하고 일관된 확장의 부류다. 세 특성화의 동치에 따라 이 부류의 원소를 계산하는 차수는 모든 비어 있지 않은 Π⁰₁ 부류의 원소를 계산하므로, 기저 정리를 이 부류 하나에 대해 증명하면 모든 부류로 옮겨진다.
- Turing 차수의 순서에서 위로 닫혀 있으면서 최소 원소가 없는 모임의 예다. 계산가능 열거 차수 가운데 $\mathbf 0'$ 하나만 들어 있다.
- [약한 König 보조정리](weak-konig-lemma.md)의 모형론에서 쓰인다. Scott 집합의 셋째 조건이 이 보조정리를 집합족으로 적은 것이고, 가산 Scott 집합이 Peano 산술의 모형의 표준 체계라는 정리가 두 체계를 잇는다.

[^1]: C. G. Jockusch, "Degrees of functions with no fixed points", Logic, Methodology and Philosophy of Science VIII (1989), 191-201. 전확장으로 적은 특성화와 세 조건의 동치가 여기 있다.
[^2]: C. G. Jockusch, R. I. Soare, "$\Pi^0\_1$ classes and degrees of theories", *Transactions of the American Mathematical Society* 173 (1972), 33-56. 최소 원소의 부재와 계산가능 열거 차수에 대한 결과를 다룬다.
[^3]: Dana Scott, "Algebras of sets binumerable in complete extensions of arithmetic", Recursive Function Theory, *Proceedings of Symposia in Pure Mathematics* 5 (1962), 117-121. 가산 Scott 집합과 비표준 모형의 표준 체계가 같다는 정리가 여기 있다.

# 연관 문서

## 선수지식

- [Π⁰₁ 부류](pi01-classes.md)

## 더 알아보기

아직 연결한 문서가 없다.

#computation #logic #foundations
