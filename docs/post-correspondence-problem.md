# Post 대응 문제

# 개요

**Post 대응 문제(Post correspondence problem)** 는 위아래에 문자열이 적힌 도미노의 유한 집합이 주어질 때, 도미노를 골라 늘어놓아 위쪽 문자열과 아래쪽 문자열이 같아지게 할 수 있는지 묻는 문제다. Post 가 1946년에 이 문제가 결정 불가능함을 증명했다[^1]. 문자열 이어 붙이기만으로 진술되므로, 문법과 행렬처럼 계산 기계가 보이지 않는 대상의 결정 불가능성을 [정지 문제](halting-problem.md)에서 끌어올 때 중간 단계로 쓰인다.

# 직관

도미노 넷 $\dfrac{b}{ca}$, $\dfrac{a}{ab}$, $\dfrac{ca}{a}$, $\dfrac{abc}{c}$ 가 있고 각 도미노는 몇 번이든 쓸 수 있다. 위아래를 같게 만들려면 첫 도미노의 위아래가 같은 글자로 시작해야 하므로 $\dfrac{a}{ab}$ 로 시작한다. 그러면 아래가 $b$ 한 글자 앞서 있고, 위가 $b$ 로 이어지는 $\dfrac{b}{ca}$ 를 놓는다. 이렇게 앞선 부분을 따라잡는 도미노를 고르면

$$
\frac{a}{ab}\quad\frac{b}{ca}\quad\frac{ca}{a}\quad\frac{a}{ab}\quad\frac{abc}{c}
$$

에서 위와 아래가 모두 $abcaaabc$ 가 된다.

이 탐색에서 아래 줄은 늘 위 줄보다 조금 앞서 있었다. 앞선 부분을 프로그램의 다음 상태로, 따라잡는 도미노를 계산 한 단계로 정하면, 도미노를 늘어놓는 일이 프로그램을 한 단계씩 실행하는 일이 된다. 계산이 멈출 때만 위 줄이 아래 줄을 다 따라잡게 도미노를 만들면, 같은 줄을 만드는 배열이 존재하는 것과 프로그램이 멈추는 것이 같아진다.

# 정의

알파벳 $\Sigma$ 위의 유한 문자열 쌍 $(u_1,v_1),\dots,(u_n,v_n)$ 이 주어진다. 이 문제의 **해(match)** 는 길이 $k\ge 1$ 인 첨자열 $i_1,\dots,i_k\in\lbrace 1,\dots,n\rbrace$ 로서

$$
u_{i_1}u_{i_2}\cdots u_{i_k}=v_{i_1}v_{i_2}\cdots v_{i_k}
$$

를 만족하는 것이다. 첨자는 되풀이해 써도 된다. Post 대응 문제는 주어진 쌍의 목록이 해를 갖는지 판정하는 문제다.

첫 첨자를 $i_1=1$ 로 고정한 문제를 **수정 Post 대응 문제(modified Post correspondence problem)** 라 한다.

# 성질

## 결정 불가능성

**정리 (Post, 1946).** Post 대응 문제는 결정 불가능하다.

증명의 요지는 정지 문제를 수정 문제로, 수정 문제를 원래 문제로 환원하는 것이다.

1. 수정 문제로의 환원. Turing 기계 $M$ 과 입력 $w$ 에서, 테이프 내용과 헤드 위치와 상태를 적은 문자열을 형상(configuration)이라 하고 형상을 구분 기호 $\char35{}$ 로 이어 쓴 것을 계산 기록이라 한다. 첫 도미노는 위가 $\char35{}$, 아래가 $\char35{}$ 와 시작 형상이다. 나머지 도미노는 형상의 기호를 그대로 옮기는 것, 전이 규칙 하나로 헤드 근처를 바꾸는 것, 정지 상태에서 기호를 하나씩 지우는 것, 마지막에 위 줄이 아래 줄을 따라잡게 하는 것이다. 해가 있으면 그 위 줄이 정지하는 계산 기록을 담고, 정지하는 계산 기록이 있으면 그것을 따라 도미노를 놓아 해를 만든다. 따라서 수정 문제가 해를 갖는 것과 $M$ 이 $w$ 에서 멈추는 것이 동치다.
2. 원래 문제로의 환원. 새 기호 $\ast$ 를 위 문자열에서는 각 글자 앞에, 아래 문자열에서는 각 글자 뒤에 끼우고, 첫 도미노만 아래에도 맨 앞에 $\ast$ 를 하나 더 붙인다. 그러면 위아래가 모두 $\ast$ 로 시작하는 도미노가 첫 도미노뿐이어서 모든 해가 첫 도미노로 시작한다. 끝을 맞추는 도미노 하나를 더하면 두 문제의 해가 대응한다.

해가 있으면 길이 $1,2,3,\dots$ 의 첨자열을 차례로 검사해 언젠가 찾으므로 Post 대응 문제는 인식 가능하다. 따라서 해가 없다는 문제는 인식 가능하지 않다.

## 도미노 수에 따른 경계

도미노가 $2$ 개인 경우는 결정 가능하다(Ehrenfeucht, Karhumäki, Rozenberg, 1982)[^2]. 도미노가 $5$ 개인 경우는 결정 불가능하다(Neary, 2015)[^3]. 알파벳이 글자 하나뿐이면 문자열이 길이로만 정해진다. 이때 해가 있는 것은 위아래 길이가 같은 도미노가 있거나, 위가 긴 도미노와 아래가 긴 도미노가 모두 있는 것과 같으므로 결정 가능하다.

# 활용

- 문맥 자유 문법(context-free grammar). 도미노의 위 문자열들과 아래 문자열들로 문법 두 개를 만들어, 두 문맥 자유 언어의 교집합이 비어 있는지와 한 문법이 모호한지가 결정 불가능함을 증명한다.
- 행렬 곱. Paterson 은 도미노를 정수 행렬로 부호화해, $3\times 3$ 정수 행렬의 유한 집합에서 곱하여 영행렬이 되는 곱이 존재하는지 판정하는 문제가 결정 불가능함을 증명했다[^4].
- [계산 가능성](computability.md)의 환원. 정지 문제를 Post 대응 문제로 한 번 환원해 두면, 문자열 조작으로 진술되는 다른 문제는 계산 기록을 다시 부호화하지 않고 이 문제에서 환원해 결정 불가능성을 보인다.

[^1]: E. L. Post, A variant of a recursively unsolvable problem, *Bulletin of the American Mathematical Society* **52** (1946), 264–268.
[^2]: A. Ehrenfeucht, J. Karhumäki, G. Rozenberg, The (generalized) Post correspondence problem with lists consisting of two words is decidable, *Theoretical Computer Science* **21** (1982), 119–144.
[^3]: T. Neary, Undecidability in binary tag systems and the Post correspondence problem for five pairs of words, *STACS 2015*, LIPIcs **30**, 649–661.
[^4]: M. S. Paterson, Unsolvability in 3 × 3 matrices, *Studies in Applied Mathematics* **49** (1970), 105–107.

# 연관 문서

## 선수지식

- [정지 문제](halting-problem.md)

## 더 알아보기

아직 연결한 문서가 없다.

#computation #logic #theorem
